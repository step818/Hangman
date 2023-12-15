import styles from "./Keyboard.module.css";

export default function Keyboard({
  alphabet,
  handleGuess,
  guessedLetters,
  isLoser,
  isWinner,
  correctGuesses,
}) {
  console.log("correctGuesses: ", correctGuesses);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {alphabet.map((al, index) => {
        const isActive = correctGuesses.includes(al);
        const isInactive =
          !correctGuesses.includes(al) && guessedLetters.includes(al);
        return (
          <button
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            } `}
            disabled={guessedLetters.includes(al) || isLoser || isWinner}
            key={index}
            onClick={() => {
              handleGuess(al);
            }}
          >
            {al}
          </button>
        );
      })}
    </div>
  );
}
