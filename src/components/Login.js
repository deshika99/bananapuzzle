import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "../styling/Login.css";
import logo from "../Images/logo.png"; // Import the banana logo image
import Home from "./Home"; // Import Home component

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setLoggedIn(true); // Set loggedIn to true after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  // Render Home component if user is logged in successfully
  if (loggedIn) {
    return <Home />;
  }

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-box">
        <img src={logo} alt="Bananapuzzle Logo" className="login-logo" />
        <h2 className="login-title">Welcome to BananaPuzzle</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            className="login-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="login-text">
          Don't have an account?{" "}
          <Link className="login-link" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
