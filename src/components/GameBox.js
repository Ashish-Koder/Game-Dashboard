import React from "react";
import CountDown from "./CountDown";

const GameBox = ({startDate}) => {
  return (
    // game Box
    <div className="game-box">
      <h2 className="game-heading">Game Name</h2>

      {/* Interval background Container */}
      <div className="interval-container">
        {/* starting remain heading */}
        <p className="interval-heading">Coming Soon...</p>

        {/* timer container */}
        <CountDown countDownTimeStamps={startDate}/>
      </div>

      <div className="paying-box">
        <div className="paying-action">
          <p>Action</p>
          <h2>$ 1.00</h2>
        </div>

        <div className="vertical-line"></div>
        <div className="paying-action payout">
          <p>Payout</p>
          <h2>$ 50.00</h2>
        </div>
      </div>

      <button className="game-btn">Notify Me</button>
    </div>
  );
};

export default GameBox;
