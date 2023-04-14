import "../App.css";
import { useReducer, useState } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   const [count, setCount] = useState(0);

  function increment() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: ACTION.INCREMENT });
  }

  function decrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: ACTION.DECREMENT });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={decrement}>-</button>
      <span style={{ padding: "0 20px" }}>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
