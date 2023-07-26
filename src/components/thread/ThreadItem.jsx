import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { userProp } from '../../utils/propHelper';
import ThreadHeader from './ThreadHeader';
import ThreadFooter from './ThreadFooter';

export default function ThreadItem({
  id,
  body,
  title,
  category,
  user,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <div className="relative block overflow-hidden bg-gray-700 rounded-lg border border-gray-100 p-3 sm:p-4 lg:p-5 mb-5 hover:bg-gray-800">
      <span
        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
      />
      <ThreadHeader
        user={user === undefined ? '' : user}
        id={id}
        title={title}
        category={category}
      />
      <div className="mb-4 text-white text-left">{parse(body)}</div>
      <ThreadFooter
        createdAt={createdAt}
        totalComments={totalComments}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        id={id}
      />
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userProp).isRequired,
};
