import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import RatingsCard from "./components/RatingsCard";
import FeedbackCard from "./components/FeedbackCard";
import Footer from "./components/Footer";
import "@fontsource/overpass/400.css";
import "@fontsource/overpass/700.css";
import theme from "./theme/theme";

function App() {
  const [rating, setRating] = useState();
  const [submitBtn, setSubmitBtn] = useState(false);
  const onSubmitPress = () => {
    setSubmitBtn(true);
  };

  return (
    <ChakraProvider theme={theme}>
      {submitBtn ? (
        <FeedbackCard rating={rating} />
      ) : (
        <RatingsCard onSubmitPress={onSubmitPress} setRating={setRating} />
      )}

      <Footer />
    </ChakraProvider>
  );
}

export default App;
