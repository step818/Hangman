import ReturnToHome from "./ReturnToHome";
import { useState } from "react";

export default function GameBoard({ onReturn, chosenWord, difficulty }) {
  const [guess, setGuess] = useState();
  let arrWord = chosenWord.split("");

  function handleGuess(letter) {
    setGuess(letter);
  }

  function inputChangedHandler() {}

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
        <form>
          <input
            id="letter"
            value=""
            changed={() => inputChangedHandler()}
          ></input>
          <button onClick={() => handleGuess()}>Submit!</button>
        </form>
        {arrWord.map((space) => (
          <p>_</p>
        ))}
      </ReturnToHome>
    </div>
  );
}
