import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./Page/SplashScreen";
import Login from "./Page/Login";
import CategorySelection from "./Page/CategorySelection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/categoryselection" element={<CategorySelection/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
