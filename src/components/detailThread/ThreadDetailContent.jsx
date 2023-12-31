import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { detailProp } from '../../utils/propHelper';

export default function ThreadDetailContent({ detail }) {
  const { body } = detail;
  return (
    <div className="mt-4">
      <p className="text-white">{parse(body)}</p>
    </div>
  );
}

ThreadDetailContent.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};
