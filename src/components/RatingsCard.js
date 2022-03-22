import { Box } from "@chakra-ui/react";
import IntroRatings from "./IntroRatings";
import Stars from "./Stars";

const RatingsCard = ({ onSubmitPress, setRating }) => {
  return (
    <Box className="card" maxW={{ base: "300px", md: "430px" }}>
      <IntroRatings />
      <Stars onSubmitPress={onSubmitPress} setRating={setRating} />
    </Box>
  );
};

export default RatingsCard;
