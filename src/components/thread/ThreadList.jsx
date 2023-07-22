import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadProp } from '../../utils/propHelper';

function ThreadList({ threadList }) {
  return (
    <div className="container mx-auto">
      {threadList.map((thread, index) => (
        <ThreadItem key={index} {...thread} />
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.shape(threadProp)),
};

export default ThreadList;
