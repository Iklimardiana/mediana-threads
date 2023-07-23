import React from 'react';
import PropTypes from 'prop-types';

function Header({ authUser }) {
  const { id, avatar, name } = authUser;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-600 fixed z-40 p-3 right-0 left-0">
      <div className="flex gap-2 items-center flex-shrink-0 text-white mr-6">
        <img
          className="rounded-full h-11 w-11 "
          src={avatar}
          alt={id}
          title={name}
        />
        <span className="font-semibold text-xl tracking-tight">
          Welcome,
          {` ${name}`}
        </span>
      </div>
    </nav>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Header.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
};

export default Header;
