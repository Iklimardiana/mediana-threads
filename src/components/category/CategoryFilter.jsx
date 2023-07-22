import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter({ categories, selectedCategory, onChangeCategory }) {
  return (
    <div className="">
      <select className="" value={selectedCategory} onChange={onChangeCategory}>
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
