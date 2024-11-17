import React, { useEffect, useState } from "react";
import "../styling/Profile.css"; // Import Profile CSS file

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data from localStorage or database
    const userData = JSON.parse(localStorage.getItem("userProfile")) || {
      username: "Guest",
      highestScore: 0,
      timesPlayed: 0,
      totalTimeSpent: 0,
    };

    // Update state with fetched user profile data
    setUserProfile(userData);
  }, []);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {userProfile && (
        <div className="profile-content">
          <div>
            <strong>User Name/Email:</strong> {userProfile.username}
          </div>
          <div>
            <strong>Highest Score:</strong> {userProfile.highestScore}
          </div>
          <div>
            <strong>Times Played:</strong> {userProfile.timesPlayed}
          </div>
          <div>
            <strong>Total Time Spent:</strong> {userProfile.totalTimeSpent}{" "}
            minutes
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
