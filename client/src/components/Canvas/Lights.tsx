import * as React from 'react';
import Light from "./Light";
import {LightType} from "../../util/layoutItemTypes";

interface LightsProps {
    lights: LightType[]
}

export default function Lights({lights}: LightsProps) {
    return (
        <>
            {lights.map((light, index) => {
                return (
                    <Light key={index.toString()}
                           locX={light.locX}
                           locY={light.locY}
                           on={light.on}
                    />
                );
            })}
        </>
    );
}