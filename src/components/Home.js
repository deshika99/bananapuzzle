import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Home.css"; // Adjust the import path
import logo from "../Images/logo.png"; // Import the banana logo image
import { auth } from "../firebase"; // Import your authentication module

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  // Render username or email if user is logged in
  const usernameOrEmail = user ? user.displayName || user.email : "Guest";

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Redirect to the login page after logout
        // Replace '/login' with your actual login page URL
        window.location.href = "/Home";
      })
      .catch((error) => {
        // Handle logout error
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <div className="game-info">
          <img src={logo} alt="Bananapuzzle Logo" className="game-logo" />
          <h1 className="game-name">Welcome to Bananapuzzle</h1>
          <p className="welcome-note">
            Hello, <span className="username">{usernameOrEmail}</span>!
          </p>
        </div>
        <div className="navigation">
          <Link to="/howtoplay" className="nav-link how-to-play">
            How to Play
          </Link>
          <Link to="/leaderboard" className="nav-link leaderboard">
            Leaderboard
          </Link>
          <Link to="/profile" className="nav-link profile">
            Profile
          </Link>
          <Link to="/start-play" className="nav-link start-play">
            Start Play
          </Link>
          <button className="nav-button logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
