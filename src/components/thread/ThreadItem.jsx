import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { userProp } from '../../utils/propHelper';
import ThreadHeader from './ThreadHeader';
import ThreadFooter from './ThreadFooter';

function ThreadItem({
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
    <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
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

// ThreadItem.defaultProps = {
//   user: {},
// };

export default ThreadItem;
