import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  VOTE_UP_THREAD_DETAIL: 'VOTE_UP_THREAD_DETAIL',
  VOTE_DOWN_THREAD_DETAIL: 'VOTE_DOWN_THREAD_DETAIL',
  CLEAR_VOTE_THREAD_DETAIL: 'CLEAR_VOTE_THREAD_DETAIL',
  ADD_COMMENT: 'ThreadDetail/addComment',
  VOTE_UP_COMMENT: 'VOTE_UP_COMMENT',
  VOTE_DOWN_COMMENT: 'VOTE_DOWN_COMMENT',
  CLEAR_VOTE_COMMENT: 'CLEAR_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.VOTE_UP_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.VOTE_DOWN_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function clearVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.CLEAR_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.VOTE_UP_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function downVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.VOTE_DOWN_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function clearVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.CLEAR_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    // dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(upVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.upvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(downVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.downvoteComment(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncClearVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(clearVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.neutralVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddComment(id, content) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment(id, content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(upVoteCommentActionCreator(authUser.id, commentId));

    try {
      await api.upvoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(downVoteCommentActionCreator(authUser.id, commentId));

    try {
      await api.downvoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncClearVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(clearVoteCommentActionCreator(authUser, commentId));

    try {
      await api.neutralVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  clearVoteCommentActionCreator,
  downVoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncClearVoteComment,
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncClearVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncUpVoteThreadDetail,
  upVoteThreadDetailActionCreator,
  clearVoteThreadDetailActionCreator,
};
