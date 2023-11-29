import reactImg from "../assets/logo.svg";

const reactDescriptions = ["aggresively", "cheerfully", "goofily"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header className="App-header">
      <img src={reactImg} className="App-logo" alt="logo" />
      <h1>Hangman</h1>
      <p>Play {description} with the computer or with your friend.</p>
    </header>
  );
}
