import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

const Demo = () => {
  return (
    <HStack>
      <ColorModeButton />
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
};
export default Demo;
