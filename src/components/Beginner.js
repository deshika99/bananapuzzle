import React, { useState, useEffect } from "react";
import GameLevel from "./GameLevel";
import "../styling/Beginner.css";

const Beginner = () => {
  // Define the conditions for the Beginner level
  const initialTimerDuration = 50; // Initial timer duration in seconds
  const initialChances = 5; // Initial number of chances
  const maxQuestions = 20; // Maximum number of questions

  // States
  const [chances, setChances] = useState(initialChances);
  const [timeLeft, setTimeLeft] = useState(initialTimerDuration);
  const [gameOver, setGameOver] = useState(false);

  // Effect to handle the timer
  useEffect(() => {
    if (gameOver) return; // Stop the timer if the game is over

    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup interval on component unmount
    } else {
      // Reduce a chance when the timer reaches 0
      if (chances > 0) {
        setChances((prevChances) => prevChances - 1);
        setTimeLeft(initialTimerDuration); // Reset the timer for the next round
      } else {
        setGameOver(true); // Stop the game if chances reach 0
        console.log("Game Over! No chances left.");
      }
    }
  }, [timeLeft, chances, gameOver]);

  // Handle manual wrong answers (if needed)
  const handleWrongAnswer = () => {
    if (chances > 0) {
      setChances((prevChances) => prevChances - 1);
    } else {
      setGameOver(true);
      console.log("Game Over! No chances left.");
    }
  };

  return (
    <div>
      <GameLevel
        difficulty="Beginner"
        initialTimerDuration={initialTimerDuration}
        initialChances={initialChances}
        maxQuestions={maxQuestions}
      />

      <div>
        <p>Remaining Chances: {chances}</p>
        <p>Time Left: {timeLeft}s</p>
        {gameOver ? <p>Game Over!</p> : null}
        <button onClick={handleWrongAnswer} disabled={gameOver}>
          Simulate Wrong Answer
        </button>
      </div>
    </div>
  );
};

export default Beginner;
