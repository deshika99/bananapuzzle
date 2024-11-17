// Scoreboard.js

import React, { useState, useEffect } from 'react';
import '../styling/Scoreboard.css'; // Import CSS for scoreboard styling

const Scoreboard = ({ scores }) => {
  // State variable for sorted scores
  const [sortedScores, setSortedScores] = useState([]);

  // Sort scores by highest score
  useEffect(() => {
    const sorted = [...scores].sort((a, b) => b.score - a.score);
    setSortedScores(sorted);
  }, [scores]);

  return (
    <div className="scoreboard-container">
      <h2>Scoreboard</h2>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Best Time</th>
            <th>Highest Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.bestTime}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
