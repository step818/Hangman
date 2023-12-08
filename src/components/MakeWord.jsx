import GameBoard from "./GameBoard";
import ReturnToHome from "./ReturnToHome";
import { useState } from "react";

export default function MakeWord({ onReturn }) {
  const [isReadyToPlay, setIsReadyToPlay] = useState(false);
  const [change, setChange] = useState("");

  function handleReadyToPlay() {
    setIsReadyToPlay((ready) => !ready);
  }

  function handleChange(e) {
    setChange(e.target.value.toUpperCase());
  }

  let playerScreen = (
    <ReturnToHome onReturn={onReturn}>
      <h2>You chose to play each other.</h2>
      <p>Choose one of you to be the "Word Creator."</p>
      <p>Type your challenging word here...</p>
      <input onChange={handleChange} required></input>
      <button onClick={handleReadyToPlay}>Ready to Play!</button>
    </ReturnToHome>
  );

  if (isReadyToPlay) {
    playerScreen = (
      <GameBoard onReturn={onReturn} chosenWord={change} difficulty="testing" />
    );
  }

  return <div>{playerScreen}</div>;
}
