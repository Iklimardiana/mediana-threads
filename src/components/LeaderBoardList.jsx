import React from 'react';
import PropTypes from 'prop-types';
import { userProp } from '../utils/propHelper';

export default function Leaderboard({ topUser }) {
  const leaderboardList = topUser.map((item) => ({
    ...item,
  }));

  return (
    <div className="w-full">
      <header className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <p className="text-lg text-white font-semibold">Thread User</p>
        <p className="text-lg text-white font-semibold">High Score</p>
      </header>
      <div className="divide-y divide-gray-200">
        {leaderboardList.map((item) => (
          <div
            key={item.user.id}
            className="flex items-center justify-between bg-gray-700 px-4 py-2"
          >
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src={item.user.avatar}
                alt="avatar"
              />
              <p className="text-base text-white">{item.user.name}</p>
            </div>
            <p className="text-base text-white">{item.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Leaderboard.propTypes = {
  topUser: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape(userProp).isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};
