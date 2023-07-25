import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncAddComment } from '../../states/threadDetail/action';

export default function CommentInput({ threadId }) {
  const [commentContent, setCommentContent] = useState('');
  const dispatch = useDispatch();

  const handleContentChange = (event) => {
    const { value } = event.target;
    setCommentContent(value);
  };

  const handleAddComment = () => {
    dispatch(asyncAddComment(threadId, commentContent));
    setCommentContent('');
  };

  return (
    <form className="mt-4">
      <div className="w-full mb-4 border rounded-lg bg-gray-700 border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-900">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full px-0 text-sm  border-0 bg-gray-900 focus:ring-0 text-white placeholder-gray-400"
            placeholder="Write a comment..."
            required=""
            value={commentContent}
            onChange={handleContentChange}
          />
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 bg-gray-800">
          <button
            type="button"
            onClick={handleAddComment}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4  focus:ring-blue-900 hover:bg-blue-800"
          >
            Post comment
          </button>
        </div>
      </div>
    </form>
  );
}

CommentInput.propTypes = {
  threadId: PropTypes.string.isRequired,
};
