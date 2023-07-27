/**
 * test scenario for threadsReducer
 *
 * - threadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return thre threads when given by RECEIVE_THREADS action
 *  - should return the thread with the new thread when given by ADD_THREAD action
 *  - should return the thread with the toggled like thread when given by UPVOTE_THREAD action
 *  - should return the thread with the toggled like thread when given by DOWNVOTE_THREAD action
 *  - should return the threads with the toggled like thread when given by CLEAR_VOTE_THREAD action
 *
 */

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange

    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return thre threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-123',
            title: 'Perkenalkan dirimu!',
            body: 'Yuk teman-teman, silakan perkenalkan diri kalian masing-masing yaa^^',
            category: 'perkenalan',
            createdAt: '2023-06-21T15:11:10.485Z',
            ownerId: 'me-thread',
            upVotesBy: [
              'user-1',
            ],
            downVotesBy: [
              'user-2'
            ],
            totalComments: 0
          },
          {
            id: 'thread-1234',
            title: 'Lorem Ipsum',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            category: 'Lorem',
            createdAt: '2021-06-21T15:11:10.485Z',
            ownerId: 'me-thread1',
            upVotesBy: [
              'user-1',
              'user-2',
            ],
            downVotesBy: [
              'user-3'
            ],
            totalComments: 1
          }
        ]
      }
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the thread with the new thread when given by ADD_THREAD action', () => {
    // arange
    const initialState = [
      {
        id: 'me-thread2',
        title: 'Add Thread Test',
        body: 'body test thread',
        category: 'perkenalan',
        createdAt: '2021-03-21T15:11:10.485Z',
        ownerId: 'me-thread',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'me-thread3',
          title: 'Add Thread Test 2',
          body: 'body test thread 2',
          category: 'perkenalan 2',
          createdAt: '2021-03-21T15:11:10.485Z',
          ownerId: 'me-thread-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0
        }
      }
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the thread with the toggled like thread when given by UPVOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'me-thread4',
        title: 'Add Thread Test4',
        body: 'body test thread4',
        category: 'perkenalan4',
        createdAt: '2021-03-21T15:11:10.485Z',
        ownerId: 'me-thread4',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ];

    const action = {
      type: 'UPVOTE_THREAD',
      payload: {
        threadId: 'me-thread4',
        userId: 'me-thread-2'
      }
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId]
      }
    ]);
  });

  it('should return the thread with the toggled like thread when given by DOWNVOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'me-thread4',
        title: 'Add Thread Test4',
        body: 'body test thread4',
        category: 'perkenalan4',
        createdAt: '2021-03-21T15:11:10.485Z',
        ownerId: 'me-thread4',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ];

    const action = {
      type: 'DOWNVOTE_THREAD',
      payload: {
        threadId: 'me-thread4',
        userId: 'user-2'
      }
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId]
      }
    ]);
  });

  it('should return the thread with the toggled like thread when given by CLEAR_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'me-thread4',
        title: 'Add Thread Test4',
        body: 'body test thread4',
        category: 'perkenalan4',
        createdAt: '2021-03-21T15:11:10.485Z',
        ownerId: 'me-thread4',
        upVotesBy: ['user-2'],
        downVotesBy: ['user-2'],
        totalComments: 0
      }
    ];

    const action = {
      type: 'CLEAR_VOTE_THREAD',
      payload: {
        threadId: 'me-thread4',
        userId: 'user-2'
      }
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [],
        upVotesBy: []
      }
    ]);
  });
});
