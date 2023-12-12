import { ALPHABET } from "../data";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
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
  // const maskedWord = chosenWord
  //   .split("")
  //   .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
  //   .join(" ");

  const wrongGuesses = guessedLetters.filter(
    (letter) => !chosenWord.includes(letter)
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <ReturnToHome onReturn={onReturn}>
        <p>You've chosen the {difficulty} difficulty level.</p>
        {wrongGuesses}
        <HangmanDrawing wrongGuesses={wrongGuesses.length} />
        {gameLost ? <p>You lose</p> : null}
        {gameLost ? (
          <p>
            <i>The word is {chosenWord}</i>
          </p>
        ) : null}
        <HangmanWord correctGuesses={correctGuesses} chosenWord={chosenWord} />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            alphabet={ALPHABET}
            guessedLetters={guessedLetters}
            handleGuess={handleGuess}
            gameLost={gameLost}
          />
        </div>
      </ReturnToHome>
    </div>
  );
}
