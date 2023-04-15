import { useLayoutEffect, useRef, useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();
  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <>
    <p>useLayoutEffect Demo - Nov 2021</p>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>
      {show && (
        <div style={{ position: "absolute", background: "khaki", padding:10 }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
}
