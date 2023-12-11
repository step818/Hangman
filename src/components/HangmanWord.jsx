export default function HangmanWord({ correctGuesses, chosenWord }) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fonFamily: "monospace",
      }}
    >
      {chosenWord.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: correctGuesses.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
