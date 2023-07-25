import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="relative flex items-center">
      <select
        className="bg-gray-700 text-white border py-2 px-4 pr-8 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500"
        value={selectedCategory}
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
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};
