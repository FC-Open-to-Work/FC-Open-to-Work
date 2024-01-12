import React, {useEffect} from 'react';
import {Stage, Layer} from 'react-konva';
import {papergrid} from '../../assets';

import Background from "./Background";
import Beds from "./Beds";
import Walls from "./Walls";
import Lights from "./Lights";
import {useLayoutObjectsDispatch} from "../../context/layoutObjectsContext";
import {useLayoutDevicesDispatch} from "../../context/layoutDevicesContext";
import {getCurrentUserObjects} from "../../api/layout/layoutObjectsAPI";
import {getCurrentUserDevices} from "../../api/layout/layoutDevicesAPI";

interface CanvasContainerProps {
    dimensions: {
        height: number,
        width: number
    }
}

const CanvasContainer: React.FC<CanvasContainerProps> = ({dimensions}) => {
    let [backgroundLoaded, setBackgroundLoaded] = React.useState(false);
    let background = new Image();
    background.src = papergrid;
    background.onload = () => {
        setBackgroundLoaded(true);
    }

    const layoutObjectsDispatch = useLayoutObjectsDispatch();
    const layoutDevicesDispatch = useLayoutDevicesDispatch();

    useEffect(() => {
        getCurrentUserObjects(layoutObjectsDispatch);
        getCurrentUserDevices(layoutDevicesDispatch);
    }, [layoutObjectsDispatch, layoutDevicesDispatch]);

    return (
        <div className="border-2 border-blue-200 shadow w-full">
            <Stage width={dimensions.width - 3} height={dimensions.height} draggable>
                <Background backgroundLoaded={backgroundLoaded} background={background}/>
                <Layer>
                    <Walls/>
                    <Beds/>
                    <Lights/>
                </Layer>
            </Stage>
        </div>
    );
};

export default CanvasContainer;
