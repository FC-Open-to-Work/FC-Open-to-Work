import * as React from 'react';
import Light from "./Light";
import {useLayoutDevicesState} from "../../context/layoutDevicesContext";

export default function Lights() {
    const {lights} = useLayoutDevicesState();

    return (
        <>
            {lights.map((light, index) => {
                return (
                    <Light id={light.id}
                           key={index.toString()}
                           name={light.name}
                           locX={light.locX}
                           locY={light.locY}
                           on={light.on}
                           value={light.value}
                    />
                );
            })}
        </>
    );
}