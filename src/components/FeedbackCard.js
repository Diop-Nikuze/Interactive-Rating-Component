import { Box, Image, Text, VStack, Button } from "@chakra-ui/react";
import thanksImage from "../image/illustration-thank-you.svg";

const FeedbackCard = ({ rating, setSubmitBtn }) => {
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

      <Button
        type="submit"
        mt="30px"
        onClick={() => setSubmitBtn(false)}
        _focus={{ outline: "none" }}
        w="full"
        borderRadius="100px"
        textTransform="uppercase"
        fontWeight="700"
        letterSpacing={2}
        backgroundColor="hsl(25, 97%, 53%)"
        _hover={{ backgroundColor: "white", color: "hsl(25, 97%, 53%)" }}
        transition="ease-in-out .2s"
        color="white"
      >
        Rate Again
      </Button>
    </Box>
  );
};

export default FeedbackCard;
