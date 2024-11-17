import React, { useEffect, useState } from "react";
import "../styling/Leaderboard.css"; // Import Leaderboard CSS file

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const fetchLeaderboardData = () => {
      const data = JSON.parse(localStorage.getItem("leaderboard")) || [];
      const sortedLeaderboard = data.sort((a, b) => b.score - a.score);
      setLeaderboard(sortedLeaderboard);
    };

    // Fetch the logged-in user's email from localStorage
    const userEmail = localStorage.getItem("loggedInUserEmail");

    // Update the loggedInUser state
    setLoggedInUser(userEmail);

    fetchLeaderboardData();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username/Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr
              key={index}
              className={entry.username === loggedInUser ? "highlighted" : ""}
            >
              <td>{index + 1}</td>
              <td>
                {entry.username === loggedInUser
                  ? "You"
                  : entry.email || `Player ${index + 1}`}
              </td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
