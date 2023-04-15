import { useCallback, useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(1));
    console.log("Updating Items");
  }, [getItems]);

  return items.map((item) => <li key={item}>{item}</li>);
}

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + incrementor + 2,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "khaki",
    color: !dark ? "#333" : "khaki",
    padding: 10,
  };

  return (
    <>
      <p>useCallback Demo</p>
      <p>useCallback returns a function while useMemo returns a value</p>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle theme
        </button>
        <ul>
          <List getItems={getItems} />
        </ul>
      </div>
    </>
  );
}
