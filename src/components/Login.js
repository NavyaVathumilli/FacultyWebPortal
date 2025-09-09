import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Login.css';

const Login = ({ onBack }) => {
  const { login } = useAuth(); // access login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password); // call login from context
    if (success) {
      setError('');
      // redirect to dashboard or department page
      navigate('/facultydashboard'); 
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const fillDemoCredentials = () => {
    setEmail('john.doe@university.edu');
    setPassword('password123');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="title">Faculty Login</h2>
          <div className="alert">
            <p className="alert-text">⚠️ Students are not authorized to access this Login page</p>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Faculty Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your faculty email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <div className="form-footer">
            <div className="remember-me">
              <input id="remember-me" name="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="submit-btn">Sign In</button>
          <button type="button" onClick={fillDemoCredentials} className="demo-btn">
            Fill Demo Credentials
          </button>
        </form>

        <button onClick={onBack} className="back-btn">Back to Faculty Directory</button>
      </div>
    </div>
  );
};

export default Login;
