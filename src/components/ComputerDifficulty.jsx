import GameBoard from "./GameBoard.jsx";
import ReturnToHome from "./ReturnToHome.jsx";
import { WORDS } from "../data.js";
import { useState } from "react";

function chooseRandomWord(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function ComputerDifficulty({ onReturn }) {
  const [difficulty, setDifficulty] = useState();
  const [chosenWord, setChosenWord] = useState();

  function handleWordChoosing(difficulty) {
    const temp = chooseRandomWord(2);
    if (difficulty === "Easy") {
      return WORDS[0][temp];
    } else {
      return WORDS[1][temp];
    }
  }

  function handleDifficulty(difficulty) {
    setChosenWord(handleWordChoosing(difficulty));
    console.log(chosenWord);
    setDifficulty(difficulty);
  }

  if (difficulty === "Easy") {
    return (
      <GameBoard
        onReturn={onReturn}
        chosenWord={chosenWord}
        difficulty={difficulty}
      />
    );
  } else if (difficulty === "Hard") {
    return (
      <GameBoard
        onReturn={onReturn}
        chosenWord={chosenWord}
        difficulty={difficulty}
      />
    );
  } else {
    return (
      <div>
        <ReturnToHome onReturn={onReturn}>
          <h2>You chose to play the computer.</h2>
          <p>Select a difficulty...</p>
          <button onClick={() => handleDifficulty("Easy")}>Easy</button>
          <button onClick={() => handleDifficulty("Hard")}>Hard</button>
        </ReturnToHome>
      </div>
    );
  }
}
