import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function ThreadInput({ onCreate }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className="space-y-4 md:space-y-6">
      <div>
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
        >
          Category
        </label>
        <input
          type="text"
          name="category"
          value={category}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add Category"
          onChange={onCategoryChange}
          required
        />
      </div>
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onTitleChange}
          placeholder="Add Title"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="thread"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Thread
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={body}
          onChange={onBodyChange}
        />
      </div>
      <button
        type="button"
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={() => onCreate({ title, category, body })}
      >
        Submit
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default ThreadInput;
