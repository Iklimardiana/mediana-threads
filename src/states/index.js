import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadDetailReducer from './threadDetail/reducer';
import thredsReducer from './thread/reducer';
import usersReducer from './thread/reducer';
import leaderboardReducer from './leaderboard/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: thredsReducer,
    threadDetail: threadDetailReducer,
    leaderboard: leaderboardReducer,
  },
});

export default store;
