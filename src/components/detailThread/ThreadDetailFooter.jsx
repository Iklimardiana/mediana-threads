import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ActionButton from '../ActionButton';
import { detailProp } from '../../utils/propHelper';
import {
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
} from '../../states/threadDetail/action';

export default function ThreadDetailFooter({ detail }) {
  const { upVotesBy, downVotesBy } = detail;

  const dispatch = useDispatch();

  const handleUpVoteThread = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const handleDownVoteThread = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  return (
    <footer className="flex justify-between mt-2 items-center">
      <div className="flex space-x-2">
        <ActionButton
          type="up"
          count={upVotesBy.length}
          onButtonClicked={handleUpVoteThread}
        />
        <ActionButton
          type="down"
          count={downVotesBy.length}
          onButtonClicked={handleDownVoteThread}
        />
      </div>
    </footer>
  );
}

ThreadDetailFooter.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};
