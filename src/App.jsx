import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import CreateThreadPage from './pages/addThreadPage';
import DetailPage from './pages/DetailPage';
import Navigation from './components/Navigation';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import './styles/index.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
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
    <>
      {/* <Loading /> */}
      <div className="app-container">
        {/* <header>
          
        </header> */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/create" element={<CreateThreadPage />} />
            <Route path="/thread/:id" element={<DetailPage />} />
          </Routes>
        </main>
        <aside>
          <Navigation signOut={onSignOut} />
        </aside>
      </div>
    </>
  );
}

export default App;
