import * as React from 'react';
import Light from "./Light";
import {useLayoutItemsState} from "../../context/layoutItemsContext";

export default function Lights() {
    const {lights} = useLayoutItemsState();

    return (
        <>
            {lights.map((light, index) => {
                return (
                    <Light key={index.toString()}
                           name={light.name}
                           locX={light.locX}
                           locY={light.locY}
                           on={light.on}
                    />
                );
            })}
        </>
    );
}