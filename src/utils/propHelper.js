import PropTypes from 'prop-types';

const userProp = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
};

const threadProp = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.number,
  user: PropTypes.shape(userProp),
};

export { userProp, threadProp };
