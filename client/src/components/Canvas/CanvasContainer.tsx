import React from 'react';
import {Stage, Layer, Rect} from 'react-konva';
import {papergrid} from '../../assets'
import {LayoutItemsType} from "../../util/types";

import Beds from "./Beds";
import Walls from "./Walls";

interface CanvasContainerProps {
    dimensions: {
        height: number,
        width: number
    },
    layoutItems: LayoutItemsType
}

const CanvasContainer: React.FC<CanvasContainerProps> = ({dimensions, layoutItems}) => {
    let background = new Image();
    background.src = papergrid;

    return (
        <div className="border-2 rounded-lg border-blue-200 shadow w-full">
            <Stage width={dimensions.width - 4} height={dimensions.height} draggable>
                <Layer >
                    <Rect
                        x={0}
                        y={0}
                        width={1677}
                        height={1130}
                        fill="#dbeafe"
                        shadowBlur={1}
                        opacity={0.99}
                    />
                    <Rect
                        x={0}
                        y={0}
                        width={1677}
                        height={1130}
                        fillPatternImage={background}
                        opacity={0.075}
                    />
                </Layer>
                <Layer>
                    <Walls walls={layoutItems.walls}/>
                    <Beds beds={layoutItems.beds}/>
                </Layer>
            </Stage>
        </div>
    );
};

export default CanvasContainer;
