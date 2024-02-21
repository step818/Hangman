import { Button } from "@chakra-ui/react";

export default function ReturnToHome({ onReturn, children }) {
  return (
    <div>
      <Button onClick={onReturn}>Go Back to Home</Button>
      {children}
    </div>
  );
}
