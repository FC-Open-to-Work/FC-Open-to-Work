import React from 'react';
import {Stage, Layer} from 'react-konva';
import {Walls} from "./Walls";

type LayoutItems = {
    walls: number[][]
}

interface CanvasContainerProps {
    dimensions: {
        height: number,
        width: number
    },
    layoutItems: LayoutItems
}

const CanvasContainer: React.FC<CanvasContainerProps> = ({dimensions, layoutItems}) => {
    return (
        <div className="border-2 rounded-lg border-blue-200 shadow w-full">
            <Stage width={dimensions.width} height={dimensions.height} draggable>
                <Layer>
                    <Walls walls={layoutItems.walls}/>
                </Layer>
            </Stage>
        </div>
    );
};

export default CanvasContainer;
