import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
// import Register from "./pages/Register";

import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element= {<Register />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
