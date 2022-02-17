import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

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
    <div className="box-reportage">
      {sortedPosts.slice(0, 3).map((item, id) => (
        <a
          key={id}
          href="www.jimbere.org"
          className={id === 0 ? "boxnews" : "boxnews boxnewsmall"}
        >
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

          <img src={item.image.formats.medium.url} alt="" />
        </a>
      ))}
    </div>
  );
}

export default App;
