import log from 'loglevel';
import { io } from 'socket.io-client'; // Импортируем io из socket.io-client
import uuid from '../services/uuid';
import appConfig from '../services/appConfig';
import { COMMAND_SENT } from './actions/commandActions';

/**
 * The Hub is our interface between the websocket connection and the app
 * - Can send commands over the websocket
 * - Receives backend events from the websocket
 *
 * @param {function} dispatch The redux dispatch function
 * @param {function} getUserId Callback that provides the current userId (if any)
 * @param {function} getRoomId Callback that provides the current roomId (if any)
 * @return {{onConnect: onConnect, sendCommand: sendCommand, onEvent: onEvent}} a/the Hub instance
 */
export default function hubFactory(dispatch, getUserId, getRoomId) {
  let ioInstance;
  let onEventHandler;
  let onConnectHandler;

  // Устанавливаем экземпляр socket.io
  if (appConfig.env === 'test') {
    // Во время тестов заглушка для ioInstance
    ioInstance = {
      emit: () => {}, // Пустая функция, чтобы избежать ошибок вызова emit
    };
  } else {
    // Настраиваем соединение
    ioInstance = io(appConfig.websocketUrl || '/'); // Укажите адрес, если отличается от '/'

    ioInstance.on('connect', () => {
      log.info('Socket connected to server');
      if (onConnectHandler) {
        onConnectHandler(); // Вызываем callback подключения
      }
    });

    ioInstance.on('disconnect', () => log.info('Socket disconnected from server'));

    ioInstance.on('event', (ev) => {
      debugReceivedEvent(ev);
      if (onEventHandler) {
        onEventHandler(ev); // Вызываем обработчик события
      }
    });
  }

  return {
    onEvent,
    onConnect,
    sendCommand,
  };

  /**
   * Устанавливаем обработчик событий
   * @param {function} onEventCb Callback для событий
   */
  function onEvent(onEventCb) {
    onEventHandler = onEventCb;
  }

  /**
   * Устанавливаем обработчик подключения
   * @param {function} onConnectCb Callback для подключения
   */
  function onConnect(onConnectCb) {
    onConnectHandler = onConnectCb;
  }

  /**
   * Отправляет команду на сервер через WebSocket
   * @param {object} command Команда для отправки
   */
  function sendCommand(command) {
    // Генерируем уникальный ID для команды
    command.id = uuid();

    // Если userId или roomId отсутствуют, заполняем их
    if (!command.userId) {
      command.userId = getUserId();
    }

    if (!command.roomId) {
      command.roomId = getRoomId();
    }

    // Отправляем команду через socket.io
    ioInstance.emit('command', command);

    // Логируем отправленную команду
    debugSentCommand(command);

    // Отправляем Redux action
    dispatch({
      type: COMMAND_SENT,
      command,
    });
  }
}

/**
 * Логирует отправленные команды в режиме DEBUG
 * @param {object} command Команда для логирования
 */
function debugSentCommand(command) {
  if (log.getLevel() > log.levels.DEBUG) {
    return;
  }

  console.groupCollapsed('%c %s', 'color:#2b827b', command.name);
  console.dir(command);
  console.groupEnd();
}

/**
 * Логирует полученные события в режиме DEBUG
 * @param {object} ev Событие для логирования
 */
function debugReceivedEvent(ev) {
  if (log.getLevel() > log.levels.DEBUG) {
    return;
  }

  console.groupCollapsed('%c %s', 'color:#2b4e82', ev.name);
  console.dir(ev);
  console.groupEnd();
}
