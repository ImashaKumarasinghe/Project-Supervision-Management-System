import React from 'react';
import './LecturerDashboard.css';




const LecturerDashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src="/web-project-logo.png" alt="Oxford Logo" />
        </div>
        <div className="profile">
            <img src="/profileImage.jpg" alt="Profile" className="avatar" />
            <div className="info">
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
          <h2>My projects</h2>
          <div className="icons">
            <span className="icon">🔔</span>
            <span className="icon">💬</span>
          </div>
        </header>

        <section className="projects-grid">
          {['OXF/ENG/01', 'OXF/DIT/01', 'OXF/HND/01'].map((code) =>
            [1, 2, 3].map((n) => (
              <div className="project-card" key={`${code}-${n}`}>
                <div className="icon">📄</div>
                <p>Project 0{n}</p>
                <span>{code}</span>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default LecturerDashboard;
