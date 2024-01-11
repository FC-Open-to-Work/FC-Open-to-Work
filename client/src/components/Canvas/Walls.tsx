import * as React from 'react';
import {Line} from "react-konva";
import {useLayoutObjectsState} from "../../context/layoutObjectsContext";


export default function Walls() {
    const {walls} = useLayoutObjectsState();

    return (
        <>
            {walls.map((wall, index) => {
                return (
                    <Line key={index.toString()}
                          points={wall}
                          stroke="#575d64"
                            // stroke="black"
                          strokeWidth={3}
                          lineCap="round"
                          lineJoin="round"
                          shadowBlur={1}
                          listening={false}
                          perfectDrawEnabled={false}
                    />
                );
            })}
        </>
    );
}