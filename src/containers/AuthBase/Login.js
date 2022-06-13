import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { authenticate } from 'utils/api';
import { useInput, useTracking } from 'hooks';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const { trackUserLoginError, trackUserLoginSuccess } = useTracking();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    authenticate({ email, password })
      .then(() => {
        trackUserLoginSuccess({ email });
        setSuccess(true);
      })
      .catch(({ message }) => {
        trackUserLoginError();
        setError(message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (success && !loading) {
      window.location.href = '/';
    }
  }, [success, loading]);

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Log in to your account</h1>
      <div className="urls-container">
        <a href="https://app.allfactors.com/signup/registration/">
          Don’t have an account yet? Sign up
        </a>
      </div>
      <div className="input-container">
        <input
          id="email"
          name="email"
          onChange={setEmail}
          required
          type="email"
          value={email}
          placeholder="Email"
        />
      </div>
      <div className="input-container">
        <input
          id="password"
          name="password"
          onChange={setPassword}
          required
          type="password"
          value={password}
          placeholder="Password"
        />
      </div>
      <div className="feedback">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      <button type="submit" className="btn btn-default">
        Log in
      </button>
      <div className="urls-container forgot-password">
        <Link to="/auth/reset-password">Forgot password?</Link>
      </div>
    </form>
  );
};

export default Login;
