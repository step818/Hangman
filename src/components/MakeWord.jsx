import ReturnToHome from "./ReturnToHome";

export default function MakeWord({ onReturn }) {
  return (
    <div>
      <ReturnToHome onReturn={onReturn}>
        <h2>You chose to play each other.</h2>
        <p>Choose one of you to be the "Word Creator."</p>
        <p>Type your challenging word here...</p>
        <input></input>
      </ReturnToHome>
    </div>
  );
}
