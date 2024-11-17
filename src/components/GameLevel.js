import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styling/GameLevel.css";
import GameOverOverlay from "./GameOverOverlay";
import Leaderboard from "./Leaderboard"; // Import Leaderboard component

const GameLevel = ({ difficulty, initialTimerDuration, initialChances }) => {
  // State variables
  const [question, setQuestion] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(initialTimerDuration);
  const [chances, setChances] = useState(initialChances);
  const [score, setScore] = useState(0);
  const [roundOver, setRoundOver] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Function to fetch question and image URL from the API
  const fetchQuestion = async () => {
    try {
      const response = await fetch("https://marcconrad.com/uob/banana/api.php");
      const data = await response.json();
      setQuestion(data.question);
      // Extract the image URL from the question object
      const imageUrl = data.question.match(/https:\/\/.+\.png/)[0];
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  // Function to handle user's answer submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the answer is correct
    const lastDigit = imageUrl.match(/\d(?=\.png)/)[0];
    if (answer.trim() === lastDigit) {
      // Handle correct answer
      console.log("Correct answer!");
      playSound("correctSound"); // Play correct sound
      // Award 5 points for correct answer
      setScore(score + 5);
    } else {
      // Handle wrong answer
      console.log("Wrong answer!");
      playSound("incorrectSound"); // Play incorrect sound
      // Decrement chances
      setChances(chances - 1);
      if (chances === 1) {
        // Handle game over
        console.log("Game over!");
        setRoundOver(true);
        handleGameOver(); // Add this line to update leaderboard on game over
      }
    }
    // Clear the input field
    setAnswer("");
    // Fetch a new question
    fetchQuestion();
  };

  // Function to handle timer countdown
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0 && !roundOver) {
        setTimer(timer - 1);
      } else if (!roundOver) {
        // Time's up
        playSound("timeUpSound"); // Play time-up sound
        console.log("Time's up!");
        // Decrement chances
        setChances(chances - 1);
        // Reset timer for the next question
        setTimer(initialTimerDuration);
        // Fetch a new question
        fetchQuestion();
      }
    }, 1000);

    // Cleanup function
    return () => clearInterval(countdown);
  }, [timer, roundOver]);

  // Function to play sound
  const playSound = (id) => {
    if (!isMuted) {
      document.getElementById(id).play();
    }
  };

  // Function to handle retry
  const handleRetry = () => {
    setRoundOver(false);
    setChances(initialChances);
    setScore(0);
    setTimer(initialTimerDuration);
    fetchQuestion();
  };

  // Function to handle cancel
  const handleCancel = () => {
    // Navigate to home or start game
    // You can implement the navigation logic here
    console.log("Navigate to home or start game");
  };

  // Function to handle game over
  const handleGameOver = () => {
    // Update leaderboard with the player's score
    const leaderboardEntry = { username: "Player", score };
    updateLeaderboard(leaderboardEntry);
  };

  // Function to update leaderboard
  const updateLeaderboard = (newEntry) => {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push(newEntry);
    leaderboard.sort((a, b) => b.score - a.score); // Sort leaderboard entries by score
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  };

  // Function to handle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach((audio) => {
      audio.volume = isMuted ? 1 : 0; // Set volume to 1 (sound on) if currently muted, otherwise set volume to 0 (sound off)
    });
  };

  // Fetch question on component mount
  useEffect(() => {
    fetchQuestion();
    playSound("gameStartSound"); // Play game start sound
  }, []);

  return (
    <div className={`${difficulty.toLowerCase()}-container`}>
      <audio
        id="gameStartSound"
        src="https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
      ></audio>
      <audio
        id="correctSound"
        src="https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
      ></audio>
      <audio
        id="incorrectSound"
        src="https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"
      ></audio>
      <audio
        id="timeUpSound"
        src="https://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg"
      ></audio>

      {!roundOver && (
        <>
          <div className="timer-container">
            <h3 className="timer">Time left: {timer} seconds</h3>
            <h3 className="chances">Chances left: {chances}</h3>
            <h3 className="score">Score: {score}</h3>
            <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
          </div>
          <div className="question-container">
            {imageUrl && (
              <img src={imageUrl} alt="Question" className="question-image" />
            )}
          </div>
          <div className="answer-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer"
                className="answer-input"
                required
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
      {roundOver && (
        <GameOverOverlay onRetry={handleRetry} onCancel={handleCancel} />
      )}
    </div>
  );
};

GameLevel.propTypes = {
  difficulty: PropTypes.oneOf(["Easy", "Intermediate", "Hard"]).isRequired,
  initialTimerDuration: PropTypes.number.isRequired,
  initialChances: PropTypes.number.isRequired,
};

export default GameLevel;
