import React from 'react';
import { MdCreate, MdGroup, MdLeaderboard, MdLogout } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ signOut }) {
  return (
    <div className="side-nav bg-transparent text-white text-3xl">
      <Link to="/create">
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-600"
          title="Create Threads"
        >
          <MdCreate className="border p-1 w-9 h-9" />
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-600"
          title="Threads"
        >
          <MdGroup className="border p-1 w-9 h-9" />
        </button>
      </Link>
      <Link to="/leaderboard">
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-600"
          title="Leaderboard"
        >
          <MdLeaderboard className="border p-1 w-9 h-9" />
        </button>
      </Link>
      <button
        type="button"
        className="bg-gray-500 hover:bg-gray-600"
        onClick={signOut}
        title="Sign out"
      >
        <MdLogout className="border p-1 w-9 h-9" />
      </button>
    </div>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
