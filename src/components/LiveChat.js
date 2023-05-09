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
            <ReceiveChat />
            <SendChat />
            <ReceiveChat />
            <SendChat />
            <ReceiveChat />
            <SendChat />
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
