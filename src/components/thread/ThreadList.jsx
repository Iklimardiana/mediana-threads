import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadProp } from '../../utils/propHelper';

export default function ThreadList({ threadList }) {
  return (
    <div>
      {threadList.map((thread, index) => (
        <ThreadItem key={index} {...thread} />
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.shape(threadProp)),
};
