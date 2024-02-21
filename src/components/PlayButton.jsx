import { Button } from "@chakra-ui/react";

export default function PlayButton({ title, description, onClickitty }) {
  return (
    <>
      <Button
        colorScheme="teal"
        size="lg"
        height="52px"
        border="4px"
        borderColor="pink.400"
        onClick={onClickitty}
      >
        {title}
        {description}
      </Button>
    </>
  );
}
