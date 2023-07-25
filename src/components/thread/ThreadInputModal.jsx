import React from 'react';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import useInput from '../../hooks/useInput';

export default function ThreadInputModal({ onCreate, onClose, isModalOpen }) {
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [body, setBody] = useInput('');

  const handleCloseModal = () => {
    onClose();
  };

  const handleCreate = () => {
    onCreate({ title, category, body });
    handleCloseModal();
  };

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full transition-opacity duration-300 ease-in-out ${
        isModalOpen ? 'modal-container opacity-100' : 'modal opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative rounded-lg shadow-lg bg-gray-800">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={handleCloseModal}
          >
            <IoMdClose className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-white">
              Add Your Thread
            </h3>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-left text-white"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={category}
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add Category"
                  onChange={setCategory}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-white text-left"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={setTitle}
                  placeholder="Add Title"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="thread"
                  className="block mb-2 text-sm font-medium text-white text-left"
                >
                  Thread
                </label>
                <textarea
                  id="thread"
                  rows="4"
                  className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                  value={body}
                  onChange={setBody}
                />
              </div>
              <button
                type="button"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800"
                onClick={() => {
                  handleCreate();
                  handleCloseModal();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

ThreadInputModal.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};
