import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "../styling/Signup.css";
import logo from "../Images/logo.png"; // Import the banana logo image
import Login from "./Login"; // Import Login component

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [userCreated, setUserCreated] = useState(false); // State to track user creation

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setUserCreated(true); // Set userCreated to true after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  // Render Login component if user is created successfully
  if (userCreated) {
    return <Login message="User created successfully! Please log in." />;
  }

  return (
    <div className="signup-container">
      <div className="background-image"></div>
      <div className="signup-box">
        <img src={logo} alt="Bananapuzzle Logo" className="signup-logo" />
        <h2 className="signup-title">Welcome to BananaPuzzle</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            className="signup-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="signup-button" type="submit">
            Register
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="signup-text">
          Already have an account?{" "}
          <Link className="signup-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
