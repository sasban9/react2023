import "./App.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // console.log('render '+resourceType);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div
      className="App"
      style={{ background: "#" + windowWidth + "4", paddingBottom: 40 }}
    >
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            {item.email && (
              <h4>
                {item.name}{" "}
                <span style={{ color: "blue" }}>&lt;{item.email}&gt;</span>
                {item.postId && (
                  <>
                    commented on{" "}
                    <span style={{ color: "red" }}>post id {item.postId}</span>
                  </>
                )}
              </h4>
            )}
            <p>{item.body}</p><hr/>
          </div>
        );
      })}
    </div>
  );
}