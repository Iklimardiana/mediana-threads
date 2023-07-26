import React, { useEffect, useState } from 'react';
import { Routes, Route, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import DetailPage from './pages/DetailPage';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import Header from './components/Header';
import ThreadInputModal from './components/thread/ThreadInputModal';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncAddThread } from './states/thread/action';
import './styles/index.css';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const handleThreadCreate = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <div className="pl-5 pr-5">
      <header>
        <Loading />
        <Header authUser={authUser} signOut={onSignOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/thread/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <aside>
        <Navigation setIsModalOpen={setIsModalOpen} />
        {isModalOpen && (
          <>
            <div className="blur-overlay" />
            <ThreadInputModal
              onCreate={handleThreadCreate}
              onClose={handleCloseModal}
              isModalOpen={isModalOpen}
            />
          </>
        )}
      </aside>
    </div>
  );
}

export default App;
