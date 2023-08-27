import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const responseData = await response.json();
        // Store the token in localStorage
        
        localStorage.setItem('accessToken', responseData.accessToken);
        console.log('Access token:', responseData.accessToken);
        navigate('/todos'); // Navigate to the dashboard after successful login
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>
          <input
            type="text"
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
            type="button"
            className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={handleSignIn}
          >
            Sign In
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the{' '}
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="/">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Don't have an account?{' '}
          <a className="no-underline border-b border-blue text-blue" href="/">
            Signup
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default SignIn;
