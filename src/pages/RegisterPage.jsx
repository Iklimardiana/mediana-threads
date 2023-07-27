import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import RegisterInput from '../components/Auth/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

export default function RegisterPage() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigateTo('/');
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
      <p className="flex items-center mb-6 text-2xl font-semibold text-white">
        Me-Thread
      </p>
      <div className="w-full rounded-lg shadow border sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-left md:text-2xl text-white">
            Sign up
          </h1>
          <RegisterInput onRegister={handleRegister} />
          <p className="text-sm font-light text-gray-400">
            Do you have an account?
            {' '}
            <Link
              to="/"
              className="font-medium hover:underline text-primary-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
