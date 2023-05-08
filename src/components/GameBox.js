import React from "react";

const GameBox = () => {
  return (
    <div className="game-box">
      <h2 className="game-heading">Game Name</h2>
      <div className="interval-container">
        <p className="interval-heading">Coming Soon...</p>
        <div className="timer-wrapper">
          <div className="time-wrap">
            <div className="time-digit">10</div>
            <p className="time-unit">Days</p>
          </div>
          <p className="colon">:</p>
          <div className="time-wrap">
            <div className="time-digit">10</div>
            <p>Days</p>
          </div>
          <p className="colon">:</p>
          <div className="time-wrap">
            <div className="time-digit">10</div>
            <p>Days</p>
          </div>
        </div>
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
