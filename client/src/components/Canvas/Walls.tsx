import * as React from 'react';
import {Line} from "react-konva";

interface WallsProps {
    walls: number[][]
}

export function Walls({walls}: WallsProps) {
    return (
        <>
            {walls.map((wall) => {
                return (
                    <Line points={wall}
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