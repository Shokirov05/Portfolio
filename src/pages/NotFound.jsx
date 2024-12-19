import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
