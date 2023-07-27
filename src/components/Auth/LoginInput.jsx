import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

export default function LoginInput({ login }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  return (
    <form className="space-y-4 md:space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-left text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          className="border sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="name@example.com"
          onChange={setEmail}
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-white text-left"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={setPassword}
          placeholder="••••••••"
          className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="button"
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={() => login({ email, password })}
      >
        Sign in
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
