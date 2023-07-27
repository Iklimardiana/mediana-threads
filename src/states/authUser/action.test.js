/**
 * skenario test for auth thunk function
 *
 * asyncSetAuthUser thunk :
 *  - should dispatch action correctly when authentication success
 *  - should dispatch action and call alert correctly when data fetching failed
 *  - should dispatch action and call alert correctly when authentication failed
 * asyncUnsetAuthUser thunk :
 *  - should dispatch action correctly and reset access token
 */

import {
  describe,
  beforeEach,
  afterEach,
  it,
  vi,
  expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
} from './action';

const fakeAuthUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('Auth thunk', () => {
  beforeEach(() => {
    api._login = api.login;
    api._putAccessToken = api.putAccessToken;
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api._login = api.login;
    api._putAccessToken = api.putAccessToken;
    api._getOwnProfile = api.getOwnProfile;

    // hapus data backup
    delete api.login;
    delete api.putAccessToken;
    delete api.getOwnProfile;
  });

  it('should dispatch action correctly when authentication success', async () => {
    // arrange
    // stub implementation
    api.login = () => Promise.resolve(fakeAuthUser);
    api.getOwnProfile = () => Promise.resolve(fakeAuthUser);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncSetAuthUser({ email: 'john@example.com', password: 'testpassword' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUser));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when authentication failed', async () => {
    // arrange
    // stub implementation
    api.login = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncSetAuthUser({ email: 'john@example.com', password: 'testpassword' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });

  it('should dispatch action correctly and reset access token', async () => {
    // arrange
    // Stub implementation
    api.putAccessToken = vi.fn();

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncUnsetAuthUser()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator());
    expect(api.putAccessToken).toHaveBeenCalledWith('');
  });
});
