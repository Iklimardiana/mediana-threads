import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaCommentDots } from 'react-icons/fa';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
} from '../../states/thread/action';
import formatDate from '../../utils/index';
import ActionButton from '../ActionButton';

export default function ThreadFooter({
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
    <footer className="flex-col item-center">
      <p className="text-gray-300 text-sm mb-1">{formatDate(createdAt)}</p>
      <div className="flex items-center text-white">
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
          <FaCommentDots className="mr-1 text" />
          <p className="text-white">{totalComments}</p>
        </div>
      </div>
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
