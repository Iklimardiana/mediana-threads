import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentList from '../components/comment/CommentList';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadDetailHeader from '../components/detailThread/ThreadDetailHeader';
import ThreadDetailFooter from '../components/detailThread/ThreadDetailFooter';
import ThreadDetailContent from '../components/detailThread/ThreadDetailContent';
import ThreadDetailCommentForm from '../components/detailThread/ThreadDetailCommentForm';

export default function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <section className="bg-gray-900 min-h-screen py-8">
      <div className="max-w-3xl mx-auto mt-14">
        <div className="bg-gray-700 border p-4 shadow-md rounded-lg">
          <ThreadDetailHeader detail={threadDetail} />
          <ThreadDetailContent detail={threadDetail} />
          <ThreadDetailFooter detail={threadDetail} />
          <ThreadDetailCommentForm detail={threadDetail} />
        </div>
        <div className="mt-4">
          {threadDetail.comments.length > 0 ? (
            <>
              <h3 className="text-lg font-semibold text-white">
                {`Comments (${threadDetail.comments.length})`}
              </h3>
              <CommentList comments={threadDetail.comments} />
            </>
          ) : (
            <div className="bg-gray-700 mt-4 p-4 shadow-md rounded-lg">
              <h3 className="text-lg font-semibold text-white">
                No Comment
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
