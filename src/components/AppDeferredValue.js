import { useDeferredValue, useEffect, useMemo, useState } from "react";

function List({ input }) {
  const LIST_SIZE = 22222;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input:${input}\nDeferred: ${deferredInput}`);
  }, [input, deferredInput]);

  return list;
}

export default function App() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <p>useDeferredValue Demo</p>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
}
