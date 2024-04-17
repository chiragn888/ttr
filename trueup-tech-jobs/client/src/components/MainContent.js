import React from 'react';

/**
 * MainContent component displays the central tagline, supportive text,
 * and action links for joining or searching jobs.
 */
const MainContent = () => {
  return (
    <div className="main-content">
      <h1 className="tagline">Don’t miss your dream tech job</h1>
      <p className="supportive-text">
        Explore top tech positions from leading companies and start your journey today.
      </p>
      <div className="action-links">
        <button className="join-now-btn" onClick={() => alert("Join Now Clicked!")} type="button">
          JOIN NOW
        </button>
        <a href="#search-jobs" className="search-jobs-link" onClick={() => alert("Search Jobs Clicked!")}>
          Search jobs
        </a>
      </div>
      <style jsx>{`
        .main-content {
          text-align: center;
          padding: 50px 20px;
        }
        .tagline {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .supportive-text {
          font-size: 24px;
          margin-bottom: 30px;
        }
        .action-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .join-now-btn {
          background-color: blue;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
        }
        .search-jobs-link {
          color: blue;
          text-decoration: none;
          font-size: 18px;
          cursor: pointer;
        }
        .search-jobs-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default MainContent;
```