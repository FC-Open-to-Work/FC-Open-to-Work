import React, {useEffect, useState} from "react";

import useClientSize from "../hooks/useClientSize";
import {useAuthState} from "../context/auth";

import CanvasContainer from "../components/Canvas/CanvasContainer"
import Sidebar from "../components/Sidebar";
import ControlPanel from "../components/ControlPanel";
import {Widget} from "../components/Widget";

import {getCurrentUserBeds, getCurrentUserWalls} from "../api/getLayoutItems";
import {logout} from "../api/authentication/AuthFormSubmit";

import {LayoutItemsType} from "../util/types";

export default function Home() {
    const { username } = useAuthState();
    const {dimensions, canvasContainerRef} = useClientSize();

    const [layoutItems, setLayoutItems] = useState<LayoutItemsType>(
        {walls: [], beds: []});

    useEffect(() => {
        setLayoutItems({
            walls: getCurrentUserWalls(),
            beds: getCurrentUserBeds()
        });
    }, []);

    return (
        <>
            <Sidebar logout={logout}/>
            <div className="absolute flex flex-col gap-y-4 lg:flex-row gap-x-0 lg:gap-x-4 w-full h-full py-14 px-4 sm:px-8 sm:pl-[16rem]">
                <div className="flex shrink-0 lg:flex-1 h-full flex-col min-w-0 p-4 bg-blue-100 rounded-2xl">
                    <div className="h-fit flex items-center justify-between px-4">
                        <p className="font-bold text-2xl">{username}'s Home</p>
                        <button className="font-medium bg-white rounded-md px-2 py-1.5 shadow hover:ring-blue-200 hover:ring hover:bg-blue-50">Edit Home</button>
                    </div>
                    <div className="h-[calc(100%-3rem)]  flex-1 px-4 pt-2  rounded-2xl" ref={canvasContainerRef}>
                        <CanvasContainer dimensions={dimensions} layoutItems={layoutItems}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 h-full shrink-0 grow-0 lg:basis-64 transition-transform">
                    <Widget />
                    <ControlPanel />
                </div>
            </div>
        </>
    );
}
