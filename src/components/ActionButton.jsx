import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import PropTypes from 'prop-types';

function ActionButton({ type, count, onButtonClicked }) {
  const isVoted = count !== 0;

  let buttonClassName = 'action-btn';
  if (isVoted) {
    buttonClassName += type === 'up' ? ' text-blue-600' : ' text-red-600';
  } else {
    buttonClassName += ' text-gray-200';
  }
  if (type === 'up') {
    buttonClassName += ' liked';
  }

  return (
    <button
      className={`${buttonClassName} flex items-center gap-1`}
      type="button"
      onClick={onButtonClicked}
    >
      {type === 'up' ? (
        <MdThumbUp className="text-xl" />
      ) : (
        <MdThumbDown className="text-xl" />
      )}
      <p className="text-sm">{count}</p>
    </button>
  );
}

ActionButton.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  count: PropTypes.number.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
};

export default ActionButton;
