import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userProp } from '../../utils/propHelper';

export default function ThreadHeader({ user, id, title, category }) {
  const { name, avatar } = user;

  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-start mb-2">
          <img
            className="w-12 h-12 rounded-full mr-4 text-white"
            src={avatar}
            alt="avatar"
          />
          <div className="">
            <Link to={`/thread/${id}`} className="text-xl text-white font-bold hover:underline">
              {title}
            </Link>
            <p className="text-white">{`By: ${name}`}</p>
          </div>
        </div>
        <div className="mb-2 text-left">
          <span className="text-white bg-blue-500 px-2 py-1 rounded-lg ">
            {`#${category}`}
          </span>
        </div>
      </div>
    </header>
  );
}

ThreadHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape(userProp).isRequired,
};
