import React from "react";
import GameLevel from "./GameLevel";
import "../styling/Expert.css";

const Expert = () => {
  return (
    <GameLevel
      difficulty="Expert"
      initialTimerDuration={30}
      initialChances={2}
    />
  );
};

export default Expert;
