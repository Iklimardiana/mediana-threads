import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from '../comment/CommentInput';
// import CommentList from '../comment/CommentList';
import { detailProp } from '../../utils/propHelper';

export default function ThreadDetailCommentForm({ detail }) {
  // const { comments } = detail;
  return (
    <div className="space-y-4 mt-4">
      <div>
        <h3 className="text-lg text-white font-semibold">Add Comment</h3>
        <CommentInput threadId={detail.id} />
      </div>
      {/* <div>
        <h3 className="text-lg text-white font-semibold">{`Comments (${comments.length})`}</h3>
        <CommentList comments={comments} />
      </div> */}
    </div>
  );
}

ThreadDetailCommentForm.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};
