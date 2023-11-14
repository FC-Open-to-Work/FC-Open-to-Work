import * as React from 'react';
import Light from "./Light";
import {useLayoutItemsState} from "../../context/layoutItems";

export default function Lights() {
    const {lights} = useLayoutItemsState();

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