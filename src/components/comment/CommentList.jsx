import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { commentProp } from '../../utils/propHelper';

export default function CommentList({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-700 border mt-4 p-4 shadow-md rounded-lg">
          <CommentItem {...comment} />
        </div>
      ))}
    </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentProp)).isRequired,
};
