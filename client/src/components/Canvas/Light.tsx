import React from 'react';
import {Circle} from "react-konva";
import {LightType} from "../../util/layoutItemTypes";

function Light({locX, locY, on}: LightType) {
    return (
        <Circle x={locX} y={locY} radius={15}
                stroke="black"
                fill={on ? "#ece787" :"#c5d1e1"}
                shadowColor={on ? "#ece787" : "black"}
                shadowBlur={on ? 35 : 3}
        />
    );
}

export default Light;