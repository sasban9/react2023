import { useRef, useState } from "react";

export default function AppTwo() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
        <p>App Two</p>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
