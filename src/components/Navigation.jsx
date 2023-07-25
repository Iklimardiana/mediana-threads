import React from 'react';
import { MdOutlineLeaderboard, MdOutlineLogout } from 'react-icons/md';
import { RiAddCircleLine } from 'react-icons/ri';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navigation({ signOut, setIsModalOpen }) {
  return (
    <ul className="side-nav bg-transparent text-white text-3xl">
      <li>
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-600"
          title="Create Threads"
          onClick={() => setIsModalOpen(true)}
        >
          <RiAddCircleLine className="border p-1 w-9 h-9" />
        </button>
      </li>
      <li>
        <Link to="/">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-600"
            title="Threads"
          >
            <HiOutlineChatAlt2 className="border p-1 w-9 h-9" />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/leaderboard">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-600"
            title="Leaderboard"
          >
            <MdOutlineLeaderboard className="border p-1 w-9 h-9" />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-600"
            onClick={signOut}
            title="Sign out"
          >
            <MdOutlineLogout className="border p-1 w-9 h-9" />
          </button>
        </Link>
      </li>
    </ul>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired
};
