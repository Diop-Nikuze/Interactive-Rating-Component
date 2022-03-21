import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "'Overpass', sans-serif",
        background: "#121417",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },

      ".card": {
        background:
          "linear-gradient(to bottom right, #1E252F 20%, #191D26 90%)",
        py: "1.5rem",
        px: "1.75rem",
        borderRadius: "20px",
      },
    }),
  },
});

export default theme;
