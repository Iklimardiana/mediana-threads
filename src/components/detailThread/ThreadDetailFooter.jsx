import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ActionButton from '../ActionButton';
import { detailProp } from '../../utils/propHelper';
import {
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
} from '../../states/threadDetail/action';

function ThreadDetailFooter({ detail }) {
  const { upVotesBy, downVotesBy } = detail;

  const dispatch = useDispatch();

  const onUpvoteThread = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  return (
    <footer className="flex justify-between mt-2 items-center">
      <div className="flex space-x-2">
        <ActionButton
          type="up"
          count={upVotesBy.length}
          onButtonClicked={onUpvoteThread}
        />
        <ActionButton
          type="down"
          count={downVotesBy.length}
          onButtonClicked={onDownVoteThread}
        />
      </div>
    </footer>
  );
}

ThreadDetailFooter.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailFooter;
