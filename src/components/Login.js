import React from 'react';
import './Login.css';

const Login = ({ onBack }) => {
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
          <p className="subtitle">This portal is exclusively for faculty members only.</p>
          <div className="alert">
            <p className="alert-text">⚠️ Students are not authorized to access this portal</p>
          </div>
        </div>

        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Faculty Email</label>
            <input id="email" name="email" type="email" required placeholder="Enter your faculty email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required placeholder="Enter your password" />
          </div>

          <div className="form-footer">
            <div className="remember-me">
              <input id="remember-me" name="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="submit-btn">Sign In</button>
        </form>

        <div className="support">
          <p>Need help? Contact <a href="#">IT Support</a></p>
        </div>

        <button onClick={onBack} className="back-btn">Back to Faculty Directory</button>
      </div>
    </div>
  );
};

export default Login;
