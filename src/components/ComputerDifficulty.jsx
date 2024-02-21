import { Box, Button, Heading, Stack } from "@chakra-ui/react";

import GameBoard from "./GameBoard.jsx";
import ReturnToHome from "./ReturnToHome.jsx";
import { WORDS } from "../data.js";
import { useState } from "react";

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function ComputerDifficulty({ onReturn }) {
  const [difficulty, setDifficulty] = useState();
  const [chosenWord, setChosenWord] = useState();

  function handleWordChoosing(difficulty) {
    const index = getRandomNumber(9);
    if (difficulty === "Easy") {
      return WORDS[0][index].toUpperCase();
    } else {
      return WORDS[1][index].toUpperCase();
    }
  }

  function handleDifficulty(difficulty) {
    setChosenWord(handleWordChoosing(difficulty));
    setDifficulty(difficulty);
  }

  if (difficulty === "Easy" || difficulty === "Hard") {
    return (
      <GameBoard
        onReturn={onReturn}
        chosenWord={chosenWord}
        difficulty={difficulty}
      />
    );
  } else {
    return (
      <div>
        <ReturnToHome onReturn={onReturn}>
          <Heading
            m={4}
            p={4}
            color="gray.800"
            textTransform="uppercase"
            fontSize="3xl"
          >
            Select a difficulty...
          </Heading>
          <Box m={30}>
            <Stack spacing={8} direction="row" align="center">
              <Button
                colorScheme="purple"
                size="lg"
                height="52px"
                width="200px"
                border="4px"
                borderColor="pink.500"
                textColor="pink.200"
                className=""
                onClick={() => handleDifficulty("Easy")}
              >
                Easy
              </Button>
              <Button
                colorScheme="blue"
                size="lg"
                height="52px"
                width="200px"
                border="4px"
                borderColor="yellow"
                textColor="yellow.300"
                onClick={() => handleDifficulty("Hard")}
              >
                Hard
              </Button>
            </Stack>
          </Box>
        </ReturnToHome>
      </div>
    );
  }
}
