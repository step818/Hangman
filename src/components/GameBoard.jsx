import { ALPHABET } from "../data";
import Keyboard from "./Keyboard";
import ReturnToHome from "./ReturnToHome";
import { useState } from "react";

export default function GameBoard({ onReturn, chosenWord, difficulty }) {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);

  function handleGuess(al) {
    console.log(al);
    if (chosenWord.includes(al)) {
      setCorrectGuesses([...correctGuesses, al]);
    }
    setGuessedLetters([...guessedLetters, al]);
  }
  let gameLost = false;
  const maskedWord = chosenWord
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");

  const wrongGuesses = guessedLetters.length - correctGuesses.length;
  let head = null;
  let body = null;
  let rightArm = null;
  let leftArm = null;
  let rightLeg = null;
  let leftLeg = null;
  if (wrongGuesses >= 6) {
    head = <p>GAME OVERRRR!!!</p>;
    gameLost = true;
  } else if (wrongGuesses >= 5) {
    body = <p>GAME OVE</p>;
  } else if (wrongGuesses >= 4) {
    rightArm = <p>GAME O</p>;
  } else if (wrongGuesses >= 3) {
    leftArm = <p>GAME </p>;
  } else if (wrongGuesses >= 2) {
    rightLeg = <p>GAM</p>;
  } else if (wrongGuesses >= 1) {
    leftLeg = <p>G</p>;
  }

  return (
    <div>
      <ReturnToHome onReturn={onReturn}>
        <p>You've chosen the {difficulty} difficulty level.</p>
        {wrongGuesses}
        {head}
        {body}
        {rightArm}
        {leftArm}
        {rightLeg}
        {leftLeg}
        {wrongGuesses.length === 6 ? <p>You lose</p> : null}
        <p>
          <i>The word is {chosenWord}</i>
        </p>
        {maskedWord}

        <Keyboard
          alphabet={ALPHABET}
          guessedLetters={guessedLetters}
          handleGuess={handleGuess}
          gameLost={gameLost}
        />
      </ReturnToHome>
    </div>
  );
}
