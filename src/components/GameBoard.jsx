import { useCallback, useEffect, useState } from "react";

import { ALPHABET } from "../data";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import ReturnToHome from "./ReturnToHome";

export default function GameBoard({ onReturn, chosenWord, difficulty }) {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const isLoser = guessedLetters.length - correctGuesses.length >= 6;
  const isWinner = chosenWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (key) => {
      const letter = key.toUpperCase();
      if (guessedLetters.includes(key) || isLoser || isWinner) return;

      handleGuess(letter);
    },
    [handleGuess, guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  function handleGuess(al) {
    console.log(al);
    if (chosenWord.includes(al)) {
      setCorrectGuesses([...correctGuesses, al]);
    }
    setGuessedLetters([...guessedLetters, al]);
  }

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
        {isLoser && (
          <p>
            You lose. <i>The word is {chosenWord}</i>
          </p>
        )}
        {isWinner && <p>You win!!</p>}
        <HangmanWord correctGuesses={correctGuesses} chosenWord={chosenWord} />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            correctGuesses={correctGuesses}
            alphabet={ALPHABET}
            guessedLetters={guessedLetters}
            handleGuess={handleGuess}
            isLoser={isLoser}
            isWinner={isWinner}
          />
        </div>
      </ReturnToHome>
    </div>
  );
}
