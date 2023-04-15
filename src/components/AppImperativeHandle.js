import React, {
//   forwardRef,
  //   useImperativeHandle,
  useRef,
  useState,
} from "react";

const CustomInput = React.forwardRef(({ style, ...props }, ref) => {
  //   useImperativeHandle(
  //     ref,
  //     () => {
  //       return { alertHi: () => alert("hi") };
  //     },
  //     []
  //   );
  return (
    <input
        ref={ref}
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25em",
        borderBottom: ".2em solid tomato",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        // ...style,
      }}
    />
  );
});

export default function App() {
  const [value, setValue] = useState("red");
  const inputRef = useRef();

  return (
    <>
      <p>useImperativeHandle Demo</p>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
