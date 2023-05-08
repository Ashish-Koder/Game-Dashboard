import React from "react";
import rankingImage from "../assets/Group.png";

function Player() {
  return (
    <div className="player-box">
      <img
        src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
        alt="profile"
        className="profile-image"
      />
      <p className="player-name">Player Name</p>
      <div className="rank-box">
        <img src={rankingImage} alt="rank icon" />
        <p>1st</p>
      </div>
    </div>
  );
}

export default Player;
