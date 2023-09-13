import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
// import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element= {<Register />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
