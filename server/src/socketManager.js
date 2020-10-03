import {v4 as uuid} from 'uuid';

import getLogger from './getLogger';
import socketRegistryFactory from './socketRegistry';

const LOGGER = getLogger('socketManager');

/**
 *
 * @param commandProcessor
 * @param {function} sendEventToRoom
 * @param {function} removeSocketFromRoomByIds
 */
export default function socketManagerFactory(
  commandProcessor,
  sendEventToRoom,
  removeSocketFromRoomByIds
) {
  const registry = socketRegistryFactory();

  return {
    handleIncomingCommand,
    onDisconnect
  };

  async function handleIncomingCommand(socket, msg) {
    try {
      const userId = getUserIdForMessage(socket.id, msg);
      const {producedEvents} = await commandProcessor(msg, userId);

      if (!producedEvents || producedEvents.length < 1) {
        return;
      }

      updateSocketRegistryJoining(userId, producedEvents, socket);

      sendEvents(producedEvents, producedEvents[0].roomId);

      updateSocketRegistryLeavingOrConnectionLost(userId, producedEvents, socket);
      updateSocketRegistryKicking(userId, producedEvents);
    } catch (commandProcessingError) {
      handleCommandProcessingError(commandProcessingError, msg, socket);
    }
  }

  function updateSocketRegistryJoining(userId, producedEvents, socket) {
    const joinedRoomEvent = getJoinedRoomEvent(producedEvents);
    if (joinedRoomEvent) {
      registry.registerSocketMapping(socket.id, userId, joinedRoomEvent.roomId);

      // also join sockets together in a socket.io "room" , so that we can emit messages to all sockets in that room
      socket.join(joinedRoomEvent.roomId);
    }
  }

  function updateSocketRegistryLeavingOrConnectionLost(userId, producedEvents, socket) {
    const leftRoomOrConnectionLostEvent = getLeftRoomOrConnectionLostEvent(producedEvents);
    if (leftRoomOrConnectionLostEvent) {
      registry.removeSocketMapping(
        socket.id,
        leftRoomOrConnectionLostEvent.userId,
        leftRoomOrConnectionLostEvent.roomId
      );
      removeSocketFromRoomByIds(socket.id, leftRoomOrConnectionLostEvent.roomId);
    }
  }

  function updateSocketRegistryKicking(userId, producedEvents) {
    const kickedRoomEvent = getKickedRoomEvent(producedEvents);
    if (kickedRoomEvent) {
      // find and remove sockets that match room and userId (for the kicked user, not the kicking user)
      // user could have opened multiple sockets, remove all that match userId and roomId
      const socketIds = registry.removeAllMatchingSocketMappings(
        kickedRoomEvent.payload.userId,
        kickedRoomEvent.roomId
      );
      socketIds.forEach((socketId) => removeSocketFromRoomByIds(socketId, kickedRoomEvent.roomId));
    }
  }

  function getJoinedRoomEvent(producedEvents) {
    return (producedEvents || []).find((e) => e.name === 'joinedRoom');
  }

  function getLeftRoomOrConnectionLostEvent(producedEvents) {
    return (producedEvents || []).find((e) => e.name === 'leftRoom' || e.name === 'connectionLost');
  }

  function getKickedRoomEvent(producedEvents) {
    return (producedEvents || []).find((e) => e.name === 'kicked');
  }

  /**
   * By default, the message contains the userId.
   * only for "joinRoom" the userId can be undefined / not set, then we generate a new userId here
   *
   * @param {string} socketId
   * @param msg
   * @return {string} the userId
   */
  function getUserIdForMessage(socketId, msg) {
    if (msg.userId) {
      // message provides userId, this is given for most commands.
      return msg.userId;
    }

    if (msg.name === 'joinRoom') {
      // if no userId is given, it must be a joinRoom command. this is the only command that allows that.
      return uuid();
    }

    throw new Error(`Command must provide userId. msg.name=${msg.name}`);
  }

  /**
   * send produced events to all sockets in room
   * @param producedEvents
   * @param roomId
   */
  function sendEvents(producedEvents, roomId) {
    producedEvents.forEach((producedEvent) => sendEventToRoom(roomId, producedEvent));
  }

  /**
   * If command processing failed, we send a "commandRejected" event to the client that issued the command.
   * (not sent to all sockets in the room)
   *
   */
  function handleCommandProcessingError(error, command, socket) {
    // for debugging, you might want to log error.stack  LOGGER.error(error.message + '\n' + error.stack);
    LOGGER.warn(error.message);

    const commandRejectedEvent = {
      name: 'commandRejected',
      id: uuid(),
      correlationId: command.id,
      roomId: command.roomId,
      payload: {
        command: command,
        reason: error.message
      }
    };

    // command rejected event is only sent to the one socket that sent the command
    socket.emit('event', commandRejectedEvent);
  }

  /**
   * if the socket is disconnected (e.g. user closed browser tab), manually produce and handle
   * a "leaveRoom" command that will mark the user.
   */
  async function onDisconnect(socket) {
    // socket.rooms is at this moment already emptied (by socketIO)
    const mapping = registry.getMapping(socket.id);

    if (!mapping) {
      // this happens if user is on landing page, socket is opened, then leaves, never joined a room. perfectly fine.
      LOGGER.debug(`Socket ${socket.id} disconnected. no mapping...`);
      return;
    }

    const {userId, roomId} = mapping;

    LOGGER.debug(
      `Socket ${socket.id} disconnected. Socket is currently mapping to user ${userId} in room ${roomId}`
    );

    if (registry.isLastSocketForUserId(userId)) {
      // we trigger a "leaveRoom" command
      const leaveRoomCommand = {
        id: uuid(),
        roomId: roomId,
        userId,
        name: 'leaveRoom',
        payload: {
          connectionLost: true // user did not send "leaveRoom" command. But connection was lost (e.g. browser closed)
        }
      };
      await handleIncomingCommand(socket, leaveRoomCommand);
    } else {
      LOGGER.debug(
        `User ${userId} in room ${roomId}, has more open sockets. Removing mapping for socket ${socket.id}`
      );
      registry.removeSocketMapping(socket.id);

      // also remove socket.io sockets from socket.io "room" , so that they no longer receive events from the room, they left (or were kicked from)
      removeSocketFromRoomByIds(socket.id, roomId);
    }
  }
}