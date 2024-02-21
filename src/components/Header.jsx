import { Heading } from "@chakra-ui/react";

// const reactDescriptions = ["aggresively", "cheerfully", "goofily"];

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

export default function Header() {
  return (
    <Heading as="h1" fontSize="6xl">
      Hangman
    </Heading>
  );
}
