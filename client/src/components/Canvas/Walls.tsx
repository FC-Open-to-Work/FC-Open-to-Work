import * as React from 'react';
import {Line} from "react-konva";

interface WallsProps {
    walls: number[][]
}

export default function Walls({walls}: WallsProps) {
    return (
        <>
            {walls.map((wall, index) => {
                return (
                    <Line key={index.toString()}
                          points={wall}
                          stroke="black"
                          strokeWidth={3}
                          lineCap="round"
                          lineJoin="round"
                    />
                );
            })}
        </>
    );
}