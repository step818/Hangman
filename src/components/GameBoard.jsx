import ReturnToHome from "./ReturnToHome";
import { useState } from "react";

export default function GameBoard({ onReturn, chosenWord, difficulty }) {
  let wordSplit = chosenWord.split("");
  let initialGameBoard = [];
  for (let i = 0; i < wordSplit.length; i++) {
    initialGameBoard.push("_ ");
  }

  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [potentialGuess, setPotentialGuess] = useState("");
  const [guess, setGuess] = useState("");

  function handleGuessSubmit(potentialGuess) {
    const currGuess = potentialGuess;
    setGuess(currGuess);
    console.log("wordSplit: ", wordSplit);
    console.log("initialGameBoard: ", initialGameBoard);
    setGameBoard((prevGameBoard) => {
      let updatedBoard = prevGameBoard;
      for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i] === currGuess) {
          updatedBoard[i] = currGuess;
        }
      }
      console.log("updatedBoard: ", updatedBoard);
      return updatedBoard;
    });
    setGameBoard(gameBoard);
    console.log("gameBoard: ", gameBoard);
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
        <button onClick={() => handleGuessSubmit(potentialGuess)}>
          Submit!
        </button>
        {gameBoard}
      </ReturnToHome>
    </div>
  );
}
