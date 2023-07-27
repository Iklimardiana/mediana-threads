import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdChatboxes } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { MdOutlineLogout } from 'react-icons/md';

export default function Header({ authUser, signOut }) {
  const { id, avatar, name, email } = authUser;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex right-0 left-0 items-center justify-between bg-gray-600 pt-3 pb-3 pl-8 pr-8 fixed z-30">
      <div className="flex gap-2 items-center flex-shrink-0 text-white mr-6">
        <div
          className="text-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-full p-2"
        >
          <Link to="/">
            <IoMdChatboxes />
          </Link>
        </div>
        <p className="font-semibold text-xl tracking-tight">Me-Threads</p>
      </div>
      <div className="w-full flex-grow flex items-center ">
        <div className="flex-grow" />
        <div className="relative">
          <div
            className="group cursor-pointer"
            onClick={toggleDropdown}
            onBlur={() => setIsDropdownOpen(false)}
          >
            <img
              className="rounded-full h-11 w-11"
              src={avatar}
              alt={id}
              title={name}
            />
          </div>

          {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-500 rounded-md text-white shadow-lg">
            <ul>
              <li className="px-4 py-2">
                {name}
              </li>
              <li className="px-4 py-2">
                {email}
              </li>
              <li className="px-4 py-2 border-t-2 flex items-center justify-between cursor-pointer hover:bg-gray-600 hover:rounded-b-lg" onClick={signOut}>
                <span>
                  Logout
                </span>
                <span>
                  <Link to="/">
                    <MdOutlineLogout className="w-7 h-7" />
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          )}
        </div>
      </div>
    </nav>

  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

Header.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

// eslint-disable-next-line no-lone-blocks
{ /* <img
          className="rounded-full h-11 w-11 "
          src={avatar}
          alt={id}
          title={name}
        />
        <span className="font-semibold text-xl tracking-tight">
          Welcome,
          {` ${name}`}
        </span> */ }
