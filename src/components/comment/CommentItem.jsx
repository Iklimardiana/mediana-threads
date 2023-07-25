import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { userProp } from '../../utils/propHelper';
import ActionButton from '../ActionButton';
import {
  asyncUpVoteComment,
  asyncDownVoteComment,
} from '../../states/threadDetail/action';
import CommentHeader from './CommentHeader';

export default function CommentItem({
  id,
  owner,
  createdAt,
  content,
  upVotesBy,
  downVotesBy,
}) {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleUpVoteComment = () => {
    dispatch(asyncUpVoteComment(id));
  };

  const handleDownVoteComment = () => {
    dispatch(asyncDownVoteComment(id));
  };

  return (
    <div className="mt-4">
      <CommentHeader
        user={owner === undefined ? '' : owner}
        createdAt={createdAt}
      />
      <p className="mt-2 text-white">{parse(content)}</p>
      <footer className="flex justify-start items-center mt-2">
        <div className="flex gap-2">
          <ActionButton
            authUser={authUser}
            type="up"
            onButtonClicked={handleUpVoteComment}
            count={upVotesBy.length}
          />
          <ActionButton
            authUser={authUser}
            type="down"
            count={downVotesBy.length}
            onButtonClicked={handleDownVoteComment}
          />
        </div>
      </footer>
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape(userProp).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};
