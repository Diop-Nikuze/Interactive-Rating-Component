import { Box, Image, Heading, Text } from "@chakra-ui/react";
import IconStar from "./image/icon-star.svg";

const IntroRatings = () => {
  return (
    <Box>
      <Box
        bgColor="#3d444e"
        display="inline-block"
        p="1.2rem"
        borderRadius="100px"
      >
        <Image src={IconStar} alt="icon-stra" />
      </Box>

      <Box>
        <Box>
          <Heading
            color="white"
            mt="1.5rem"
            fontWeight="700"
            fontSize="3xl"
            lineHeight="2rem"
          >
            How did we do?
          </Heading>
          <Text
            color="hsl(216, 12%, 54%)"
            fontSize="1rem"
            fontWeight="400"
            mt="1rem"
            lineHeight="1.7"
          >
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroRatings;
