import { useState } from "react";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";
import SubmitButtton from "./SubmitButtton";

const Stars = ({ onSubmitPress, setRating }) => {
  const [disabled, setDisabled] = useState(true);

  const stars = [1, 2, 3, 4, 5];
  const [color, setColor] = useState({
    active: "#fb7413",
    default: "#252d37",
    element: null,
  });

  const onButtonPress = (e, index) => {
    if (e.target.value === null) {
      setDisabled(true);
    } else {
      setRating(e.target.value);
      setDisabled(false);
    }
    setColor(() => ({
      ...color,
      element: index,
    }));
  };

  return (
    <Box>
      <SimpleGrid columns={5} my="30px" gap={3}>
        {stars.map((star, i) => (
          <Button
            key={i}
            bgColor={color.element === i ? color.active : color.default}
            onClick={(e) => onButtonPress(e, i)}
            value={star}
            _focus={{ outline: "none" }}
            _hover={{ backgroundColor: "hsl(217, 12%, 63%)" }}
            borderRadius="100%"
            p={{ base: "1.3rem", md: "1.7rem" }}
            w="2.3rem"
            h="2.3rem"
            color="white"
          >
            {star}
          </Button>
        ))}
      </SimpleGrid>
      <SubmitButtton disabled={disabled} onSubmitPress={onSubmitPress} />
    </Box>
  );
};

export default Stars;
