import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      fontSize={{ base: 10, sm: 10, md: 13, lg: 13 }}
      mt={10}
      color="white"
    >
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "hsl(25, 97%, 53%)" }}
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/Nikuze"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "hsl(25, 97%, 53%)" }}
      >
        Diop Nikuze
      </a>
    </Box>
  );
};

export default Footer;
