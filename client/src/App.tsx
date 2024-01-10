import React from "react";
import "./App.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

import {AuthProvider} from "./context/authContext";

import DynamicRoute from "./util/DynamicRoute";

function App() {
    return (
        <div className="relative min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6">
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<DynamicRoute element={<Home/>} authenticated={true}/>}
                        />
                        <Route
                            path="/login"
                            element={<DynamicRoute element={<Login/>} authenticated={false}/>}
                        />
                        <Route
                            path="/register"
                            element={
                                <DynamicRoute element={<Register/>} authenticated={false}/>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
