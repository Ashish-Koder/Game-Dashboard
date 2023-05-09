import React from "react";

const ReceiveChat = ({message, time}) => {
  return (
    <>
      {new Array(1).fill(message).map((element, index) => {
        return (
          <div className="player-chat" key={index}>
            {/* chat-player-image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="chat-profile"
                className="chat-user-profile-pic"
              />
            </div>

            {/* chat-player-right-side */}
            <div className="player-chat-right-side">
              {/* chat user info */}
              <div className="chat-user-info">
                {/* username */}
                <p className="user-name">Alex</p>
                {/* user online status */}
                <p className="user-chat-status">{time} mins</p>
              </div>
              {/* user chat message */}
              <p className="user-chat-message">{element}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReceiveChat;
