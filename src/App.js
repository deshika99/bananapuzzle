import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import StartPlay from "./components/StartPlay";
import Beginner from "./components/Beginner";
import Intermediate from "./components/Intermediate";
import Expert from "./components/Expert ";
import Timewrap from "./components/Timewrap";

import HowToPlay from "./components/HowToPlay";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import Beginner from "./components/Beginner";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SplashScreen} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/start-play" component={StartPlay} />
        <Route path="/beginner" component={Beginner} />
        <Route path="/intermediate" component={Intermediate} />
        <Route path="/Expert" component={Expert} />
        <Route path="/timewrap" component={Timewrap} />

        <Route path="/howtoplay" component={HowToPlay} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
