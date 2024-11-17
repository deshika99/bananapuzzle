import React from "react";
import "../styling/HowToPlay.css"; // Import the stylesheet for HowToPlay component

const HowToPlay = () => {
  return (
    <div className="how-to-play-container">
      <div className="how-to-play-content">
        <div className="how-to-play-header">
          <h1>How to Play BananaPuzzle</h1>
          <p>
            Welcome to BananaPuzzle! Below are the instructions on how to get
            started:
          </p>
        </div>

        <div className="how-to-play-instructions">
          <p>
            1)First, users creating an account using their email address and
            password. They are immediately logged in after successfully
            registering. Returning users only need to enter their login
            credentials to log in.
          </p>
        </div>

        <div className="how-to-play-instructions">
          <p>
            2)Users are taken to the game menu after logging in. They can choose
            from a number of alternatives here, such as launching a new game,
            seeing their profile, signing out, and seeing the leaderboard.
          </p>
        </div>

        <div className="how-to-play-instructions">
          <p>
            3)Users are presented with a choice of four options for the
            difficulty level when they decide to begin a new game. they are
            Beginner, Intermediate, and Expert
          </p>
        </div>

        <div className="how-to-play-instructions">
          <p>
            4)The game starts after a difficulty level is chosen. A sequence of
            questions with accompanying images is shown to users. Users have a
            limited amount of time and chances to enter their responses. The
            score and chances are reduced for incorrect responses.
          </p>
        </div>

        <div className="how-to-play-instructions">
          <p>
            5)Users can compare their ratings with those of other players by
            visiting the leaderboard after completing a round. Users can view
            their profile and look at information such as their username and
            email address, statistics of games they played and their high score,
            etc., by clicking on their profile.
          </p>
        </div>

        <div className="how-to-play-instructions">
          <p>Finally, users can log out of their account.</p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
