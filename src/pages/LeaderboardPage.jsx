import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboard } from '../states/leaderboard/action';
import Leaderboard from '../components/LeaderBoardList';

export default function LeaderboardPage() {
  const { leaderboard = [] } = useSelector((states) => states);

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startNumberPage = (currentPage - 1) * itemsPerPage;
  const endNumberPage = startNumberPage + itemsPerPage;
  const currentItems = leaderboard.slice(startNumberPage, endNumberPage);

  const totalPages = Math.ceil(leaderboard.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="w-full sm:w-4/5 mx-auto pt-10 mt-5 ">
        <h2 className="py-8 text-center rounded-t-lg text-2xl bg-gray-700 px-8 sm:px-16 md:px-32 font-bold text-white">
          Leaderboard
        </h2>
        <Leaderboard topUser={currentItems} />
        {totalPages > 1 && (
          <div className="flex bg-transparant justify-center mt-4">
            {currentPage > 1 && (
              <button
                type="button"
                onClick={handlePrevPage}
                className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-700 rounded-lg mr-2"
              >
                Previous
              </button>
            )}
            {pageNumbers.map((pageNumber) => (
              <button
                type="button"
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 text-white rounded-lg ${
                  pageNumber === currentPage ? 'bg-gray-700' : 'bg-gray-500 hover:bg-gray-700'
                } mr-2`}
              >
                {pageNumber}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                type="button"
                onClick={handleNextPage}
                className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-700 rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
