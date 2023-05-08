import React from "react";
import SideBar from "./components/SideBar";
import GameBox from "./components/GameBox";
import "./styles/app.scss";
import "./styles/sideBar.scss";
import "./styles/gameBox.scss";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="main">
      <section className="section">
        <SideBar />
        <GameBox />
        <Header />
      </section>
    </main>
  );
};

export default App;
