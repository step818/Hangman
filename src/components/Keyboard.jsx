export default function Keyboard({ alphabet, handleGuess, correctGuesses }) {
  return (
    <div>
      {alphabet.map((al, index) => (
        <button
          style={{
            visibility: correctGuesses.includes(al) ? "hidden" : "visible",
          }}
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
