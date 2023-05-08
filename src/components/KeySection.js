import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Key from "./Key";

const KeySection = () => {
  return (
    <div className="key-container">
      {/* upper section */}
      <div className="right-upper-section">
        <div className="upper-side">
          <h2 className="game-name">Rain Game</h2>
          <p>Can you read this?</p>
        </div>
        <FontAwesomeIcon icon={faEllipsisVertical} className="three-dots" />
      </div>
      {/* keys section */}

      <div className="keys-box">
        <div className="keys-wrapper">
          {new Array(72).fill(0).map((el, index) => <Key key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default KeySection;
