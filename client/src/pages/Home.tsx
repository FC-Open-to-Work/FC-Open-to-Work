import React from "react";

import {useNavigate} from "react-router-dom";

import CanvasContainer from "../components/CanvasContainer"

import {useAuthDispatch} from "../context/auth";
import Sidebar from "../components/Sidebar";
import useClientSize from "../hooks/useClientSize";

export default function Home() {
    const authDispatch = useAuthDispatch();

    const navigate = useNavigate();

    const {dimensions, canvasContainerRef} = useClientSize();

    const logout = () => {
        authDispatch({type: "LOGOUT"});
        // window.location.href = "login";
        navigate("/login");
    };

    return (
        <>
            <Sidebar logout={logout}/>

            <div className="flex gap-x-4 w-full h-full p-4 sm:ml-[14rem]">
                <div className="flex-1 h-full min-w-0 bg-blue-200 rounded-2xl">
                    <div ref={canvasContainerRef}>
                        <CanvasContainer dimensions={dimensions}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 h-full shrink-0 grow-0 lg:basis-64 transition-transform">
                    <div className="flex-1 bg-blue-200 rounded-2xl"></div>
                    <div className="flex-1 bg-blue-200 rounded-2xl"></div>
                </div>
            </div>
        </>
    );
}
