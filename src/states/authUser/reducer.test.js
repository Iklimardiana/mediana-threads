/**
 * test scenario for authUserReducer :
 *
 *  - should return the initial state when given an unknown action
 *  - should return the authUser when given the SET_AUTH_USER action
 *  - should return null when given the UNSET_AUTH_USER action
 */

import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';

describe('authUserReducer function', () => {
  it('should return the initial state when given an unknown action', () => {
    // arrange

    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given the SET_AUTH_USER action', () => {
    // Arrange
    const initialState = [];
    const user = { id: 'user-1', name: 'John Doe', email: ' johndoe@gmail.com' };
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: user
      }
    };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given the UNSET_AUTH_USER action', () => {
    // Arrange
    const initialState = { id: 'user-1', name: 'John Doe', email: 'johndoe@gmail.com' };
    const action = {
      type: 'UNSET_AUTH_USER'
    };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toBeNull();
  });
});
