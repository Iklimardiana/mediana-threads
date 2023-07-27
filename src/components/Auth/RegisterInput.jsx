import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

export default function RegisterInput({ onRegister }) {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleRegister = () => {
    onRegister({ name, email, password });
  };

  return (
    <form className="space-y-4 md:space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-white text-left"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={setName}
          placeholder="Your Name"
          className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required=""
        />
      </div>
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
          onChange={setEmail}
          className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="name@example.com"
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
        onClick={handleRegister}
      >
        Sign up
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
