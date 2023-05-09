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
        <GameBox startDate={"2023-05-11"}/>
        <GameBox startDate={"2023-05-12 11:46:10"}/>
        <GameBox startDate={"2023-05-13 14:27:15"}/>
      </div>
    </>
  );
};

export default Home;
