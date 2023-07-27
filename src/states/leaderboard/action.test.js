/**
 * skenario test for auth thunk function
 *
 * asyncReceiveLeaderboard thunk :
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveLeaderboard, receiveLeaderboardActionCreator } from './action';

const fakeLeaderboardResponse = [
  {
    user: {
      id: 'methread-users-1',
      name: 'mediana',
      email: 'mediana@gmail.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 20,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveLeaderboard thunk', () => {
  beforeEach(() => {
    api._getLeaderboard = api.getLeaderboard;
  });

  afterEach(() => {
    api._getLeaderboard = api.getLeaderboard;

    // delete backup data

    delete api._getLeaderboard;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboardResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);
    // assert

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch)
      .toHaveBeenCalledWith(receiveLeaderboardActionCreator(fakeLeaderboardResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
