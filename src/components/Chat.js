import React from "react";

const Chat = () => {
  return (
    <div className="player-chat">

        {/* chat-player-image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          alt="chat-profile"
          className="chat-user-profile-pic"
        />
      </div>

      {/* chat-player-right-side */}
      <div className="player-chat-right-side">

        {/* chat user info */}
        <div className="chat-user-info">
            {/* username */}
          <p className="user-name">UserName</p>
          {/* user online status */}
          <p className="user-chat-status">5 mins</p>
        </div>
        {/* user chat message */}
        <p className="user-chat-message">Awesome Game</p>
      </div>
    </div>
  );
};

export default Chat;
