import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboard } from '../states/leaderboard/action';
import LeaderboardList from '../components/LeaderBoardList';

function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  const leaderboardList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="w-full sm:w-4/5 mx-auto pt-10 shadow-xl">
        <h2 className="grid rounded-t-lg grid-cols-1 sm:grid-cols-3 py-8 text-start text-2xl bg-gray-700 px-8 sm:px-16 md:px-32 font-bold text-white">
          Top User
        </h2>
        <LeaderboardList leaderboardList={leaderboardList} />
      </div>
    </div>
  );
}

export default LeaderboardPage;
