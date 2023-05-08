import React from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import "./styles/sideBar.scss";
import "./styles/header.scss";
import "./styles/keySection.scss";
import "./styles/liveChat.scss";
import "./styles/gameBox.scss";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
    <main className="main">
      <section className="section">


        <div style={{ width: "16%" }}>
        {/* side header */}
          <SideBar />
        </div>

        <div style={{ width: "81%" }}>
        {/* top header */}
          <Header />

            <Routes>
              <Route path="/home" element = {<Home/>}/>
              <Route path="why 99" element = {<Contact/>}/>
              <Route path="about funr gg" element = {<About/>}/>
            </Routes>
        </div>
      </section>
    </main>
    </Router>

  );
};

export default App;
