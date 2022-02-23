import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  // Box,
  // Container,
  // HStack,
  // Text,
  // VStack,
  // Image,
  // useColorModeValue,
  ChakraProvider,
} from "@chakra-ui/react";

// import vivamalt from "./image/vivamalt.jpg";

function App() {
  const [data, setData] = useState([]);
  // const colorLightDark = useColorModeValue("#006159", "#2ab391");
  // const colorContent = useColorModeValue("#686868", "#aeb2c0");
  // const readMoreColor = useColorModeValue("black", "#aeb2c0");
  // const colorBorder = useColorModeValue("#ddd", "#2D3748");
  // const formatDate = new Intl.DateTimeFormat("fr", {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  useEffect(() => {
    axios.get("https://fortheloveofthegame.herokuapp.com/posts").then((res) => {
      setData(res.data);
    });
  }, []);

  const sortedPosts = data.sort(
    (prevPost, nextPost) =>
      new Date(nextPost.published_at) - new Date(prevPost.published_at)
  );

  return (
    <ChakraProvider>
      <ul className="list-news">
        {sortedPosts.slice(3, 6).map((item, id) => (
          <li key={id}>
            <a
              href="exemple.com"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{ width: "250px", height: "250px", marginRight: "20px" }}
                className="box-image"
              >
                <img src={item.image.formats.medium.url} alt="" />
              </div>
              <div>
                <h2
                  style={{
                    padding: "4px 6px",
                    background: "#006159",
                    display: "inline-block",
                  }}
                >
                  {item.category}
                </h2>
                <h2>{item.title}</h2>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </ChakraProvider>
  );
}

export default App;
