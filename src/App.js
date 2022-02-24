import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";

import vivamalt from "./image/vivamalt.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [data, setData] = useState([]);
  // const colorLightDark = useColorModeValue("#006159", "#2ab391");
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
    <Container style={{ margin: "20px auto" }}>
      <div className="box-posts">
        <div>
          {sortedPosts.slice(3, 6).map((item, id) => (
            <div
              key={id}
              className="box-container"
              style={{
                borderBottom: `${
                  id === 0 || id === 1 ? `1px solid ${colorBorder}` : "none"
                }`,
              }}
            >
              <div className="container-image">
                <img
                  src={item.image.formats.medium.url}
                  alt=""
                  className="image"
                />
              </div>
              <div className="content">
                <p>{item.category}</p>
                <p className="title">{item.title}</p>
                <p className="content-descr">
                  {item.content.substring(0, 110)}...
                </p>
                <p> {formatDate.format(new Date(item.date))}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="ads">
          <img src={vivamalt} alt="" className="ads-img" />
        </div>
      </div>
    </Container>
  );
}

export default App;
