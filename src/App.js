import './App.css';
import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(() => {
    console.log("runs only first time")
    return 4;
  });

  const decrementCount = () => {
    if(count > 1)setCount(prevCount => prevCount - 1);
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span style={{padding:"0 20px"}}>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
