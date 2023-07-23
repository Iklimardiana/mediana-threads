import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userProp } from '../../utils/propHelper';

function ThreadHeader({ user, id, title, category }) {
  const { name, avatar } = user;

  return (
    <>
      <header>
        <div className="flex items-center mb-2">
          <img
            className="w-12 h-12 rounded-full mr-4 text-white"
            src={avatar}
            alt="avatar"
          />
          <div className="">
            <p className="font-semibold">{name}</p>
            <Link to={`/thread/${id}`} className="text-blue-500">
              {title}
            </Link>
          </div>
        </div>
        <div className="mb-2 text-left">
          <span className="text-white bg-blue-500 px-2 py-1 rounded-full hover:bg-blue-600 cursor-pointer">
            #{category}
          </span>
        </div>
      </header>
    </>
  );
}

ThreadHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape(userProp).isRequired,
};

export default ThreadHeader;
