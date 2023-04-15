import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

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
    //   style={{ background: "#" + windowWidth + "4", paddingBottom: 40 }}
    >
        <p>useState demo</p>
      <div style={{ background: theme, color: "white", padding: "0 20px" }}>
        Temperature
      <br></br>
      <button onClick={decrementCount}> COLDER </button>
      <span style={{ padding: "0 20px" }}>{count} &deg;C</span>
      <button onClick={incrementCount}> WARMER</button>
      
      </div>
    </div>
  );
}

// export default App;
