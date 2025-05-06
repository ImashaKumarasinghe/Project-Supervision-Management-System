import React from 'react';
import './LecturerSettings.css';

const LecturerSettings = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src="/web-project-logo.png" alt="Oxford Logo" />
        </div>
        <div className="profile">
          <img src="/profileImage.jpg" alt="Profile" className="avatar" />
          <div className="profile-info">
            <p>Hi, Alex</p>
            <span>E173037</span>
          </div>
        </div>
        <nav className="nav-links">
          <button>📁 My Projects</button>
          <button>👨‍🏫 Review</button>
          <button>📅 Time lines</button>
          <button>⚙️ Settings</button>
        </nav>
      </aside>

      <main className="main-content">
        <header className="main-header">
          <h2>Settings</h2>
          <div className="icons">
            <span className="icon">🔔</span>
            <span className="icon">💬</span>
          </div>
        </header>

        <div className="settings-wrapper">
          <div className="settings-box">
            <ul className="settings-list">
              <li>🔔 Notifications</li>
              <li>🔑 Change Password</li>
              <li>🛡️ Security</li>
              <li>👤 Edit Profile</li>
              <li>📨 Messages</li>
              <li>🌐 Display and languages</li>
              <li>❓ Help</li>
            </ul>
          </div>

          <div className="logout-button">
            ⏻ Logout
          </div>
        </div>
      </main>
    </div>
  );
};

export default LecturerSettings;
