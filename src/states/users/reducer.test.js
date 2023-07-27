/**
 * test scenario for usersReducer :
 *
 *  - should return the initial state when given an unknown action
 *  - should set the users when given the RECEIVE_USERS action
 */

import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';

describe('usersReducer', () => {
  it('should return the initial state when given an unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    const nextState = usersReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('should set the users when given the RECEIVE_USERS action', () => {
    const initialState = [];
    const users = [
      { id: 'user-1', name: 'John Doe', email: 'johndoe@gmail.com' },
      { id: 'user-2', name: 'Jane Smith', email: 'janesmith@gmail.com' }
    ];
    const action = {
      type: 'RECEIVE_USERS',
      payload: { users }
    };
    const nextState = usersReducer(initialState, action);
    expect(nextState).toEqual(action.payload.users);
  });
});
