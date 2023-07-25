import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function ActionButton({ type, count, onButtonClicked }) {
  return (
    <div className="flex items-center gap-1 text-white">
      <button
        type="button"
        onClick={onButtonClicked}
      >
        {type === 'up' ? (
          <FaThumbsUp className="text-xl" />
        ) : (
          <FaThumbsDown className="text-xl" />
        )}
      </button>
      <p className="text-sm mr-1">{count}</p>
    </div>
  );
}

ActionButton.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  count: PropTypes.number.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
};
