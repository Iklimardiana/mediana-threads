import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter({ categories, selectedCategory, onChangeCategory }) {
  return (
    <div className="relative flex items-center">
      <select
        className="bg-gray-800 text-white py-2 px-4 pr-8 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500"
        value={selectedCategory}
        onChange={onChangeCategory}
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
  onChangeCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
