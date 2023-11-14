import React, {useEffect} from 'react';
import {Stage, Layer} from 'react-konva';
import {papergrid} from '../../assets';

import Background from "./Background";
import Beds from "./Beds";
import Walls from "./Walls";
import Lights from "./Lights";
import {useLayoutItemsDispatch} from "../../context/layoutItemsContext";

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

    const dispatch = useLayoutItemsDispatch();

    useEffect(() => {
        dispatch({type: "GET_WALLS"});
        dispatch({type: "GET_BEDS"});
        dispatch({type: "GET_LIGHTS"});
    }, []);

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
