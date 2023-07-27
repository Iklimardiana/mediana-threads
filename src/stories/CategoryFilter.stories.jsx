/* eslint-disable no-console */
import CategoryFilter from '../components/category/CategoryFilter';

const stories = {
  title: 'CategoryFilter',
  component: CategoryFilter,
};

export default stories;

export function Template() {
  return (
    <CategoryFilter
      categories={['Sport', 'Spiritual', 'Biology', 'Tech']}
      filteredCategory="Spiritual"
      onCategoryChange={(event) => console.log(event.target.value)}
    />
  );
}
