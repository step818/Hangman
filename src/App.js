import "./App.css";

import ComputerDifficulty from "./components/ComputerDifficulty.jsx";
import Header from "./components/Header.jsx";
import MakeWord from "./components/MakeWord.jsx";
import { PLAY_BUTTON } from "./data";
import PlayButton from "./components/PlayButton.jsx";
import React from "react";
import { useState } from "react";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  function handlePlayType(playingWho) {
    setSelectedPlayer(playingWho);
    console.log(selectedPlayer);
    //state will determine which screen gets shown next
  }
  if (selectedPlayer === "Computer") {
    return <ComputerDifficulty onReturn={() => handlePlayType("")} />;
  } else if (selectedPlayer === "Friend") {
    return <MakeWord onReturn={() => handlePlayType("")} />;
  } else {
    return (
      <div className="App">
        <Header />
        <main>
          <section id="core-concepts">
            <PlayButton
              onClickitty={() => handlePlayType("Computer")}
              {...PLAY_BUTTON[0]}
            />
            <PlayButton
              onClickitty={() => handlePlayType("Friend")}
              {...PLAY_BUTTON[1]}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
