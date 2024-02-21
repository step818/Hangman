import { Button, Container, Input, Stack, VStack } from "@chakra-ui/react";

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
    <>
      <ReturnToHome onReturn={onReturn} />
      <Stack spacing={4}>
        <Container>
          You chose to play each other. Choose one of you to be the "Word
          Creator."
        </Container>
        <Input
          isRequired
          placeholder="Type your challenging word here"
          width="500px"
          variant="filled"
          size="sm"
          onChange={handleChange}
        />
        <Button
          isDisabled={!change}
          colorScheme="teal"
          size="lg"
          height="52px"
          border="4px"
          borderColor="pink.400"
          onClick={handleReadyToPlay}
        >
          Ready to Play!
        </Button>
      </Stack>
    </>
  );

  if (isReadyToPlay) {
    playerScreen = (
      <GameBoard onReturn={onReturn} chosenWord={change} difficulty="testing" />
    );
  }

  return <div>{playerScreen}</div>;
}
