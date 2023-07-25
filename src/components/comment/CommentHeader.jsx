import React from 'react';
import PropTypes from 'prop-types';
import { userProp } from '../../utils/propHelper';
import formatDate from '../../utils/index';

export default function CommentHeader({ user, createdAt }) {
  const { avatar, name } = user;

  return (
    <header className="flex items-center gap-2">
      <img
        className="w-10 h-10 rounded-full text-white"
        src={avatar}
        alt="avatar"
      />
      <div>
        <p className="font-semibold text-lg text-white">{name}</p>
        <p className="text-gray-400 text-sm">{formatDate(createdAt)}</p>
      </div>
    </header>
  );
}

CommentHeader.propTypes = {
  user: PropTypes.shape(userProp).isRequired,
  createdAt: PropTypes.string.isRequired,
};
