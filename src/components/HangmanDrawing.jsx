const BODY_PARTS = [
  "head",
  "body",
  "right_arm",
  "left_arm",
  "right_leg",
  "left_leg",
];

export default function HangmanDrawing({ wrongGuesses }) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, wrongGuesses)}
    </div>
  );
}
