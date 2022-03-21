import { Button } from "@chakra-ui/react";

const SubmitButtton = ({ disabled, onSubmitPress }) => {
  return (
    <form onSubmit={onSubmitPress}>
      <Button
        type="submit"
        _focus={{ outline: "none" }}
        w="full"
        borderRadius="100px"
        textTransform="uppercase"
        fontWeight="700"
        letterSpacing={2}
        backgroundColor={disabled ? "white" : "hsl(25, 97%, 53%)"}
        _hover={{ backgroundColor: "white", color: "hsl(25, 97%, 53%)" }}
        transition="ease-in-out .2s"
        disabled={disabled}
        color={disabled ? "hsl(25, 97%, 53%)" : "inherit"}
      >
        Submit
      </Button>
    </form>
  );
};

export default SubmitButtton;
