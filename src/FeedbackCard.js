import { Box, Image, Text, VStack } from "@chakra-ui/react";
import thanksImage from "./image/illustration-thank-you.svg";

const FeedbackCard = ({ rating }) => {
  return (
    <Box className="card" maxW={{ base: "300px", md: "420px" }}>
      <Box textAlign="center">
        <VStack>
          <Image src={thanksImage} alt="illustration-thank-you" />
        </VStack>
        <Box fontWeight="700" mt="2rem" display="inline-block">
          <Text
            bgColor="#272E38"
            borderRadius="50px"
            py=".7rem"
            px="1rem"
            color="hsl(25, 97%, 53%)"
          >
            You selected {rating} out of 5
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="25px"
            fontWeight="700"
            mb=".7rem"
            mt="2rem"
            color="white"
          >
            Thank You!
          </Text>
          <Text color="hsl(216, 12%, 54%)" lineHeight="1.6">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FeedbackCard;
