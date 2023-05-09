import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ReceiveChat from '../components/ReceiveChat'
import SendChat from '../components/SendChat'

const LiveChat = () => {

  const [chatMessage, setChatMessage] = useState('')
  return (
    <div className="chat-container">
      <div className="chat-content">
        <div className="chat-heading-container">
          <h2 className="chat-heading">Live Chat</h2>
          <FontAwesomeIcon icon={faEllipsisVertical} style={{color : '#fff', fontSize: 25}}/>
        </div>
        <div className="chat-vertical-line"></div>
        <div className="chat-box">
            <ReceiveChat message={`What is Peer 2 Peer Betting ?`} time={3}/>
            <SendChat message={`Peer-to-peer or P2P betting is a form of betting that takes place between individuals without the need for a sportsbook or other
intermediaries.`} time={3} />
            <ReceiveChat message={`What is FUNR ?`} time={5}/>
            <SendChat message={`FUNR us a publicly traded company. Stock symbol: FUNR`} time={6}/>
            <ReceiveChat message={`What is a “Tournament Match” ?`} time = {6} />
            <SendChat message={`Tournament Matches is what FUNR calls their live games. Tournament Matches 
are much more than just games. They are Peer 2 Peer Betting Matches.`} time={7}/>
            <ReceiveChat message={`Awesome !`} time={8}/>
            <SendChat message={`Welcome... 🙂`} time={9}/>
        </div>
        <div className="send-box">
            <input type="text" placeholder="Type Here" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)}/>
            <div className="send-btn" onClick={() => setChatMessage('')}>
                <FontAwesomeIcon icon = {faPaperPlane} className="send-icon" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
