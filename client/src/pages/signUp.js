import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../app/action/authAction';

function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(signupUser({ name: name, email, password }));
    setIsSuccessModalOpen(true);
    clearFields();
  };


  const clearFields = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
    clearFields();
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={handleSignup}
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a>
            and
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a className="no-underline border-b border-blue text-blue" href="/signin">
            Log in
          </a>
          .
        </div>

        {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded p-8">
            <h2 className="text-2xl mb-4">Signup Successful!</h2>
            <p>Your account has been created successfully.</p>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}      
      </div>
    </div>
  );
}

export default Signup;
