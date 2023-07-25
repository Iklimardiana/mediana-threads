import React from 'react';
import PropTypes from 'prop-types';
import { detailProp } from '../../utils/propHelper';
import formatDate from '../../utils/index';

export default function ThreadDetailHeader({ detail }) {
  const {
    owner: { name, avatar },
    title,
    category,
    createdAt
  } = detail;

  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={avatar}
            alt="avatar"
          />
          <div>
            <p className="font-bold text-white">{name}</p>
            <p className="text-gray-400">{formatDate(createdAt)}</p>
          </div>
        </div>
        <span className="text-white bg-blue-500 px-2 py-1 rounded-lg">
          {`#${category}`}
        </span>
      </header>
      <h2 className="text-xl text-white font-semibold">{title}</h2>
    </>
  );
}

ThreadDetailHeader.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};
