import React from 'react';
import {Stage, Layer, Rect, Text, Circle, Line} from 'react-konva';

interface CanvasContainerProps {
    dimensions: {
        height: number,
        width: number
    }
}

const CanvasContainer: React.FC<CanvasContainerProps> = ({dimensions}) => {
    return (
        <div className="border-2 rounded-lg border-blue-200 shadow w-full">
            <Stage width={dimensions.width} height={dimensions.height} draggable>
                <Layer>
                    <Line points={[5, 5, 300, 5]}
                            stroke="red"
                            strokeWidth={3}
                            lineCap="round"
                            lineJoin="round"
                    />
                    <Text text="Some text on canvas" fontSize={15}/>
                    <Rect
                        x={20}
                        y={50}
                        width={100}
                        height={100}
                        fill="red"
                        shadowBlur={10}
                    />
                    <Circle x={200} y={100} radius={50} fill="green"/>
                    <Line
                        x={20}
                        y={200}
                        points={[0, 0, 100, 0, 100, 100]}
                        tension={0.5}
                        closed
                        stroke="black"
                        fillLinearGradientStartPoint={{x: -50, y: -50}}
                        fillLinearGradientEndPoint={{x: 50, y: 50}}
                        fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
                    />
                </Layer>
            </Stage>
        </div>
    );
};

export default CanvasContainer;
