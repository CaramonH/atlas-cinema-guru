import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';
import './auth.css';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError('Username and password are required.');
      return;
    }

    const endpoint = isLogin
      ? 'http://localhost:8000/api/auth/login'
      : 'http://localhost:8000/api/auth/register';

    try {
      const response = await axios.post(endpoint, { username, password });
      const { accessToken } = response.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message;
      setError(errorMessage);
      console.error('Authentication error:', errorMessage);
    }
  };

  return (
    <form className="authentication" onSubmit={handleSubmit}>
      <div className="toggle-auth">
        <Button
          label="Sign In"
          type="button"
          className={isLogin ? 'light-red' : 'dark-red'}
          onClick={handleToggle}
        />
        <Button
          label="Sign Up"
          type="button"
          className={isLogin ? 'dark-red' : 'light-red'}
          onClick={handleToggle}
        />
      </div>
      {isLogin ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default Authentication;
