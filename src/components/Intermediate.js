import React from "react";
import GameLevel from "./GameLevel";
import "../styling/Intermediate.css";

const Intermediate = () => {
  return (
    <GameLevel
      difficulty="Intermediate"
      initialTimerDuration={40}
      initialChances={3}
    />
  );
};

export default Intermediate;
