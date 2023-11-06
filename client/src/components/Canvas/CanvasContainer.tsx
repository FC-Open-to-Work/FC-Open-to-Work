import React from 'react';
import {Stage, Layer} from 'react-konva';
import {papergrid} from '../../assets'
import {LayoutItemsType} from "../../util/types";

import Background from "./Background";
import Beds from "./Beds";
import Walls from "./Walls";
import Lights from "./Lights";

interface CanvasContainerProps {
    dimensions: {
        height: number,
        width: number
    },
    layoutItems: LayoutItemsType
}

const CanvasContainer: React.FC<CanvasContainerProps> = ({dimensions, layoutItems}) => {
    let [backgroundLoaded, setBackgroundLoaded] = React.useState(false);
    let background = new Image();
    background.src = papergrid;
    background.onload = () => {
        setBackgroundLoaded(true);
    }

    return (
        <div className="border-2 border-blue-200 shadow w-full">
            <Stage width={dimensions.width - 3} height={dimensions.height} draggable>
                <Background backgroundLoaded={backgroundLoaded} background={background}/>
                <Layer>
                    <Walls walls={layoutItems.walls}/>
                    <Beds beds={layoutItems.beds}/>
                    <Lights lights={layoutItems.lights}/>
                </Layer>
            </Stage>
        </div>
    );
};

export default CanvasContainer;
