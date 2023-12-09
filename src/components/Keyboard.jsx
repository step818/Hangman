export default function Keyboard({
  alphabet,
  handleGuess,
  guessedLetters,
  gameLost,
}) {
  return (
    <div>
      {alphabet.map((al, index) => (
        <button
          // style={{
          //   visibility: guessedLetters.includes(al) ? "hidden" : "visible",
          // }}
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
