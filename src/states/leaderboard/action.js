import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboardActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboards,
    },
  };
}

function asyncReceiveLeaderboard() {
  return async (dispatch) => {
    try {
      const leaderboards = await api.getLeaderboard();
      dispatch(receiveLeaderboardActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, receiveLeaderboardActionCreator, asyncReceiveLeaderboard };
