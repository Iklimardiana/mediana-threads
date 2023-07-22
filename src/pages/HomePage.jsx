import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/thread/ThreadList';
import CategoryFilter from '../components/category/CategoryFilter';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const [category, setSelectedCategory] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const filteredThreads = category
    ? threadList.filter((thread) => thread.category === category)
    : threadList;

  const categories = Array.from(
    new Set(threads.map((thread) => thread.category))
  );

  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="max-w-3xl mx-auto">
        <section className="bg-gray-600 p-4 shadow-md rounded-lg">
          <CategoryFilter
            categories={categories}
            selectedCategory={category}
            onChangeCategory={handleFilterChange}
          />
          <div className="mt-4">
            <ThreadList threadList={filteredThreads} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
