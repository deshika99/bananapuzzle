import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling/SplashScreen.css";

function SplashScreen() {
  useEffect(() => {
    // Navigate to login page after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      window.location.href = "/login";
    }, 4000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="splash-screen">
      <div className="logo-container">
        <img src="/path_to_your_logo.png" alt="Logo" className="logo" />
      </div>
      <h1 className="game-name">Bananapuzzle</h1>
      <div className="loading-text">Loading...</div>
    </div>
  );
}

export default SplashScreen;
