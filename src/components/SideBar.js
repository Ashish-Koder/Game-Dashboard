import React from "react";
import logo from "../assets/Logo.png";
import Player from "./Player";

const SideBar = () => {
  return (
    <div className="side-container">
      {/* logo */}
      <div className="logo-box">
        <img src={logo} alt="Logo" />
      </div>

      {/* horizontal line */}
      <div className="horizontal-line"></div>

      {/* platform options */}
      <div className="platform-container">
        <h2 className="platform-heading">Choose your device</h2>
        <div className="platform-options">
          <p className="active">IOS Device</p>
          <p>Android Device</p>
          <p>P.C.</p>
        </div>
      </div>

      {/* Player Dashboards */}
      <div className="player-dashboard-container">
        <h2 className="dashboad-heading">Top Players</h2>
        <div className="horizontal-line"></div>
        <div className="players-list">
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
