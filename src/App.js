import "./App.css";
import React, { useMemo, useState, useRef, useEffect } from "react";
// import ClassContextComponent from "./components/ClassContextComponent";
import FunctionContextComponent from "./components/FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

function AppOne() {
  const [number, setNumber] = useState(20);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // dont memoize everything as it has a memory overhead
  const themeStyles = {
    backgroundColor: dark ? "black" : "tomato",
    color: dark ? "tomato" : "black",
    textAlign: "center",
    height: doubleNumber + 20 + "px",
    width: "50%",
    lineHeight: doubleNumber + 20 + "px",
    margin: "0 auto",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
  return num * 4;
}

function AppTwo() {
  const [name, setName] = useState("");
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

// export const ThemeContext = React.createContext()

export default function App() {

  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </>
  )
}