import "./App.css";

import Header from "./components/Header.jsx";
import { PLAY_BUTTON } from "./data";
import PlayButton from "./components/PlayButton.jsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <PlayButton {...PLAY_BUTTON[0]} />
          <PlayButton {...PLAY_BUTTON[1]} />
        </section>
      </main>
    </div>
  );
}

export default App;
