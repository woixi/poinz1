import {v4 as uuid} from 'uuid';
import {EXPECT_UUID_MATCHING, prepOneUserInOneRoomWithOneStory} from '../testUtils';

test('Should produce storyRestored event', async () => {
  const {
    userId,
    processor,
    roomId,
    storyId,
    mockRoomsStore
  } = await prepOneUserInOneRoomWithOneStory();
  const commandId = uuid();

  mockRoomsStore.manipulate((room) => room.setIn(['stories', storyId, 'trashed'], true));
  mockRoomsStore.manipulate((room) => room.set('selectedStory', undefined));

  return processor(
    {
      id: commandId,
      roomId,
      name: 'restoreStory',
      payload: {
        storyId
      }
    },
    userId
  ).then(({producedEvents, room}) => {
    expect(producedEvents).toMatchEvents(commandId, roomId, 'storyRestored', 'storySelected');

    const [storyRestoredEvent, storySelectedEvent] = producedEvents;

    expect(storyRestoredEvent.payload.storyId).toEqual(storyId);
    expect(storySelectedEvent.payload.storyId).toEqual(storyId);

    // story is in room, "trashed" flag set to false
    expect(room.stories[storyId]).toMatchObject({
      id: EXPECT_UUID_MATCHING,
      estimations: {},
      title: 'the title',
      description: 'This will be awesome',
      trashed: false
    });

    expect(room.selectedStory).toEqual(storyRestoredEvent.payload.storyId);
  });
});

test('users marked as excluded can still restore stories', async () => {
  const {
    userId,
    processor,
    roomId,
    storyId,
    mockRoomsStore
  } = await prepOneUserInOneRoomWithOneStory();

  mockRoomsStore.manipulate((room) => room.setIn(['users', userId, 'excluded'], true));
  mockRoomsStore.manipulate((room) => room.setIn(['stories', storyId, 'trashed'], true));

  const commandId = uuid();
  return processor(
    {
      id: commandId,
      roomId,
      name: 'restoreStory',
      payload: {
        storyId
      }
    },
    userId
  ).then(({producedEvents}) =>
    expect(producedEvents).toMatchEvents(commandId, roomId, 'storyRestored')
  );
});

test('Should throw if storyId is not uuid v4 format', async () => {
  const {userId, processor, roomId} = await prepOneUserInOneRoomWithOneStory();
  return expect(
    processor(
      {
        id: uuid(),
        roomId,
        name: 'restoreStory',
        payload: {
          storyId: 'some-unknown-story'
        }
      },
      userId
    )
  ).rejects.toThrow(/Format validation failed \(must be a valid uuid v4\) in \/payload\/storyId/);
});

describe('preconditions', () => {
  test('Should throw if story is not marked as "trashed"', async () => {
    const {userId, processor, roomId, storyId} = await prepOneUserInOneRoomWithOneStory();
    return expect(
      processor(
        {
          id: uuid(),
          roomId,
          name: 'restoreStory',
          payload: {
            storyId
          }
        },
        userId
      )
    ).rejects.toThrow(
      /Precondition Error during "restoreStory": Given story .* in room .* is not marked as "trashed". Nothing to restore\.\.\./
    );
  });

  test('Should throw if room does not contain matching story', async () => {
    const {userId, processor, roomId} = await prepOneUserInOneRoomWithOneStory();
    return expect(
      processor(
        {
          id: uuid(),
          roomId,
          name: 'restoreStory',
          payload: {
            storyId: uuid()
          }
        },
        userId
      )
    ).rejects.toThrow(
      /Precondition Error during "restoreStory": Given story .* does not belong to room .*/
    );
  });
});