import { Link } from "react-router-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-option">
          <li className="nav-link"><Link to="/home">What is Peer 2 Peer Betting?</Link></li>
          <li className="nav-link"><Link to="why 99">Why 99?</Link></li>
          <li className="nav-link"><Link to= "about funr 99">About FUNR.99</Link></li>
        </ul>
      </nav>
      <div className="profile-status">
        <img
          src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          alt="profile"
        />
        <div className="profile-info">
          <div>
            <h3 className="player-name">Player Name</h3>
            <p className="player-status">Online</p>
          </div>
          <i className="fa fa-chevron-down" style={{ color: "#A09EDF" }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
