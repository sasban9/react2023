import "./App.css";
import React, { useEffect, useState } from "react";

export default function AppOne() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;
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

  const decrementCount = () => {
    if (count > 1)
      setState((prevState) => {
        return { ...prevState, count: prevState.count - 1, theme: "blue" };
      });
  };

  const incrementCount = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1, theme: "red" };
    });
  };

  return (
    <div
      className="App"
      style={{ background: "#" + windowWidth + "4", paddingBottom: 40 }}
    >
      <span style={{ background: theme, color: "white", padding: "0 20px" }}>
        THEME
      </span>
      <br></br>
      <button onClick={decrementCount}>-</button>
      <span style={{ padding: "0 20px", color: theme }}>{count}</span>
      <button onClick={incrementCount}>+</button>
      <hr />
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

// export default App;
