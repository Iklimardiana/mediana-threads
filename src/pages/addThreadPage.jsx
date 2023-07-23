import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/thread/action';
import ThreadInput from '../components/create/threadInput';

function CreateThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCreate = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
      <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Me-Thread
      </p>
      <div className="w-full rounded-lg shadow border sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-left text-gray-900 md:text-2xl text-white">
            Add Your Thread
          </h1>
          <ThreadInput onCreate={onCreate} />
        </div>
      </div>
    </div>
  );
}

export default CreateThreadPage;
