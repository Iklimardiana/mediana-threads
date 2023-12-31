import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/Auth/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
      <p className="flex items-center mb-6 text-2xl font-semibold text-white">
        Me-Thread
      </p>
      <div className="w-full rounded-lg shadow border sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-left md:text-2xl text-white">
            Sign in to your account
          </h1>
          <LoginInput login={handleLogin} />
          <p className="text-sm font-light text-gray-400">
            Don’t have an account yet?
            {' '}
            <Link
              className="font-medium hover:underline text-primary-500"
              to="/register"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
