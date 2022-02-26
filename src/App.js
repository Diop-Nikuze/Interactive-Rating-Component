import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useColorModeValue, Text } from "@chakra-ui/react";

import vivamalt from "./image/vivamalt.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [data, setData] = useState([]);
  const colorLightDark = useColorModeValue("#006159", "#2ab391");
  // const colorContent = useColorModeValue("#686868", "#aeb2c0");
  // const readMoreColor = useColorModeValue("black", "#aeb2c0");
  const colorBorder = useColorModeValue("#ddd", "#2D3748");
  const formatDate = new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

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
    <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
      <Text
        mb={8}
        textTransform="uppercase"
        fontSize={{ base: "xl", md: "xx-large" }}
        fontWeight="bold"
        color={colorLightDark}
        as="h1"
        letterSpacing="-0.025em"
      >
        Actus Tendances
      </Text>
      <div style={{ display: "flex" }}>
        {sortedPosts.slice(3, 4).map((post, id) => (
          <div
            style={{
              background: "green",
              width: "400px",
              height: "450px",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            <img
              src={post.image.formats.medium.url}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
        <div
          style={{
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {sortedPosts.slice(4, 5).map((post, id) => (
            <div>
              <div
                style={{
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0.5rem",
                  padding: "1.2rem 1rem",
                }}
              >
                <p>{post.category}</p>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {post.title}
                </p>
                <p>{post.content.substring(0, 100)}...</p>
                <p>{post.date}</p>
              </div>
            </div>
          ))}

          <div>
            {sortedPosts.slice(5, 6).map((post, id) => (
              <div>
                <div
                  style={{
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    borderRadius: "0.5rem",
                    padding: "1.2rem 1rem",
                  }}
                >
                  <p>{post.category}</p>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {post.title}
                  </p>
                  <p>{post.content.substring(0, 100)}...</p>
                  <p>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
