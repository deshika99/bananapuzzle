import React from "react";
import GameLevel from "./GameLevel";
import "../styling/Expert.css";

const Expert = () => {
  return (
    <GameLevel
      difficulty="Time Wrap"
      initialTimerDuration={20}
      initialChances={1}
    />
  );
};

export default Expert;
