import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';


export default function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login submitted!");
  };

  return (
    
    <div className="login-form-container">
      <img src="/web-project-logo.png" alt="Oxford Logo" className="logo" />
      <h3>Sign in Your Account</h3>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" placeholder="Enter email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter password" required />

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember my preference
          </label>
          <Link to="/forgot-password">Forgot Password?</Link>

        </div>

        <button type="submit">Sign In</button>
      </form>
      <div className="signup-text">
  Don't have an account? <Link to="/register">Sign up</Link>
</div>
    </div>
  );
}
