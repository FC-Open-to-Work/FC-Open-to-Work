import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element= {<Register />} />
          <Route path="/home" element= {<Home />} /> */}
          <Route path="/login" element= { <Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
