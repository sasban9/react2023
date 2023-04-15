import { useState, useTransition } from "react";

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 8888;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 1; i <= LIST_SIZE; i++) {
        l.push(i + "-" + e.target.value);
      }
      setList(l);
    });
  }

  return (
    <>
      <p>useTransition Demo - May 2022</p>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}
