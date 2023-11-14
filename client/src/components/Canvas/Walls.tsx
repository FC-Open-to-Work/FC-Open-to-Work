import * as React from 'react';
import {Line} from "react-konva";
import {useLayoutItemsState} from "../../context/layoutItemsContext";


export default function Walls() {
    const {walls} = useLayoutItemsState();

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
                    />
                );
            })}
        </>
    );
}