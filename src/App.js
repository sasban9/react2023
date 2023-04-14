import "./App.css";
import React, { useMemo, useState, useRef, useEffect } from "react";
// import ClassContextComponent from "./components/ClassContextComponent";
import FunctionContextComponent from "./components/FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";
import AppTwo from "./components/AppTwo";
import AppOne from "./components/AppOne";

// export const ThemeContext = React.createContext()

export default function App() {

  return (
    <>
    <p>App Three</p>
      <ThemeProvider>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider><hr/>
    {/* <AppTwo /><hr/>
    <AppOne /><hr/> */}
    </>
  )
}