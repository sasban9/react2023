import "./App.css";
import React from "react";
// import ClassContextComponent from "./components/ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "../ThemeContext";

// export const ThemeContext = React.createContext()

export default function App() {

  return (
    <>
    <p>useContext Demo</p>
      <ThemeProvider>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </>
  )
}