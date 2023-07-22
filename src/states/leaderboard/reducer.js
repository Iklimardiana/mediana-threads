import { ActionType } from './action';

function leaderboardReducer(leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
}

export default leaderboardReducer;
