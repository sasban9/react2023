import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
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
    <div className="App">
      <span style={{ background: theme, color: "white", padding: '0 20px' }}>THEME</span><br></br>
      <button onClick={decrementCount}>-</button>
      <span style={{ padding: "0 20px", color: theme }}>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
