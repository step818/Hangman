import styles from "./Keyboard.module.css";

export default function Keyboard({
  alphabet,
  handleGuess,
  guessedLetters,
  gameLost,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {alphabet.map((al, index) => (
        <button
          // style={{
          //   visibility: guessedLetters.includes(al) ? "hidden" : "visible",
          // }}
          className={styles.btn}
          disabled={
            guessedLetters.includes(al) || gameLost === true ? true : false
          }
          key={index}
          onClick={() => {
            handleGuess(al);
          }}
        >
          {al}
        </button>
      ))}
    </div>
  );
}
