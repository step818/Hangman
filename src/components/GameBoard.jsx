import ReturnToHome from "./ReturnToHome";
import { useState } from "react";

export default function GameBoard({ onReturn, chosenWord, difficulty }) {
  let wordSplit = chosenWord.split("");
  let initialGameBoard = wordSplit.map((l, rowIndex) => (
    <p key={rowIndex}>_</p>
  ));

  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [potentialGuess, setPotentialGuess] = useState("");
  const [guess, setGuess] = useState("");

  function handleGuessSubmit() {
    setGuess(potentialGuess);
    // check if guess is in the word and not already in the wordbank, then set gameBoard to reflect guess
    // if guess is not in the word, update man
    // set wordbank to include all guesses
    // dont allow dublicate letters to be guessed
  }

  function handleChange(e) {
    setPotentialGuess(e.target.value);
  }

  return (
    <div>
      <ReturnToHome onReturn={onReturn}>
        <h2>This is the GAME!!</h2>
        <p>You've chosen the {difficulty} difficulty level.</p>
        <p>{}</p>
        <p>
          <i>The word is {chosenWord}</i>
        </p>
        <p>Take your guess!</p>

        <input
          id="letter"
          required
          onChange={handleChange}
          value={potentialGuess}
        ></input>
        <button onClick={handleGuessSubmit}>Submit!</button>
        {gameBoard}
      </ReturnToHome>
    </div>
  );
}
