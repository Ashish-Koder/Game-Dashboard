import React from "react";
import KeySection from "./KeySection";
import LiveChat from "./LiveChat";
import GameBox from "./GameBox";

const Home = () => {
  return (
    <>
      {/* platform heading */}
      <div className="platform-intro">Peer 2 Peer Betting Platform</div>

      {/* middle container */}
      <div className="middle-container">
        <div className="middle-left-section">
          <KeySection />
        </div>
        <div className="middle-right-container">
          <LiveChat />
        </div>
      </div>

      {/* Game container */}
      <div className="game-container">
        <GameBox />
        <GameBox />
        <GameBox />
      </div>
    </>
  );
};

export default Home;
