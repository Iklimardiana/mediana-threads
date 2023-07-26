import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryFilter({ categories, filteredCategory, onCategoryChange }) {
  return (
    <div className="relative flex justify-end">
      <div
        className="inline-flex items-center overflow-hidden rounded-md border bg-gray-700"
      >
        <select
          className="h-full p-2 text-white  bg-gray-700 hover:bg-gray-800 hover:text-gray-100"
          value={filteredCategory}
          onChange={onCategoryChange}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {`#${category}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};
