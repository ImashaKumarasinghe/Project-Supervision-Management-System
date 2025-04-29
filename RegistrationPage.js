import React from 'react'
import './RegistrationPage.css';

export default function RegistrationPage() {
  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="registration-header">
        
        <img src="/web-project-logo.png" alt="Logo" style={{ width: "100px" }} />

         <h3>Sign up Your Account</h3>
      
        </div>

        {/* Registration form */}
        <form>
          {/* Username input */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username" />
          </div>

           {/* Password input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>

          {/* Role selection */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <select className="form-select" id="role">
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-dark w-100">Next</button>

          {/* Link to sign in */}
          <div className="mt-3 text-center">
            Already have an account? <a href="#">Sign in</a>
          {/*  Already have an account? <a href="#">Sign in</a>*/}
          </div>

        </form>
      </div>
      
    </div>
  );
}


