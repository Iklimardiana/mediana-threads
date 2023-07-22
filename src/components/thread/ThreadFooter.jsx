import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdComment } from 'react-icons/md';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
} from '../../states/thread/action';
import formatDate from '../../utils/index';
import ActionButton from '../ActionButton';

function ThreadFooter({
  id,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
}) {
  const dispatch = useDispatch();

  const onUpVoteThread = () => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = () => {
    dispatch(asyncDownVoteThread(id));
  };

  return (
    <footer className="flex item-center justify-between">
      <div className="flex items-center">
        <ActionButton
          type="up"
          count={upVotesBy.length}
          onButtonClicked={onUpVoteThread}
        />
        <ActionButton
          type="down"
          count={downVotesBy.length}
          onButtonClicked={onDownVoteThread}
        />
        <div className="flex items-center ml-2">
          <MdComment className="mr-1" />
          <p className="text-gray-500">{totalComments}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{formatDate(createdAt)}</p>
    </footer>
  );
}

ThreadFooter.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreadFooter;
