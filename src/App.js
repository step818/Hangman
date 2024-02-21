import "./App.css";

import { Box, Button, Container, Link, Stack } from "@chakra-ui/react";

import ComputerDifficulty from "./components/ComputerDifficulty.jsx";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Header from "./components/Header.jsx";
import MakeWord from "./components/MakeWord.jsx";
import { PLAY_BUTTON } from "./data";
import PlayButton from "./components/PlayButton.jsx";
import React from "react";
import { useState } from "react";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  function handlePlayType(playingWho) {
    setSelectedPlayer(playingWho);
  }
  if (selectedPlayer === "Computer") {
    return <ComputerDifficulty onReturn={() => handlePlayType("")} />;
  } else if (selectedPlayer === "Friend") {
    return <MakeWord onReturn={() => handlePlayType("")} />;
  } else {
    return (
      <Box
        height="1000px"
        bg="gray.800"
        p={6}
        color="white"
        overflow="hidden"
        alignItems="center"
      >
        <Header />

        <Stack spacing={8} direction="row" align="center">
          <PlayButton
            onClickitty={() => setSelectedPlayer("Computer")}
            {...PLAY_BUTTON[0]}
          />
          <PlayButton
            onClickitty={() => setSelectedPlayer("Friend")}
            {...PLAY_BUTTON[1]}
          />
        </Stack>
        <Box my="16px">
          <Link color="white" href="https://www.stephentrewick.com" isExternal>
            Created by Stephen Trewick <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
      </Box>
    );
  }
}

export default App;
