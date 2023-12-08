import { ALPHABET } from "../data";
import Keyboard from "./Keyboard";
import ReturnToHome from "./ReturnToHome";
import { useState } from "react";

export default function GameBoard({ onReturn, chosenWord, difficulty }) {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState(["t"]);

  function handleGuess(al) {
    console.log(al);
    if (chosenWord.includes(al)) {
      setCorrectGuesses([...correctGuesses, al]);
      console.log(true);
    } else {
      // add a new limb to the man
      console.log(false);
    }
  }

  const maskedWord = chosenWord
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");

  return (
    <div>
      <ReturnToHome onReturn={onReturn}>
        <p>You've chosen the {difficulty} difficulty level.</p>
        <p>
          <i>The word is {chosenWord}</i>
        </p>
        {maskedWord}

        <Keyboard
          alphabet={ALPHABET}
          correctGuesses={correctGuesses}
          handleGuess={handleGuess}
        />
      </ReturnToHome>
    </div>
  );
}
