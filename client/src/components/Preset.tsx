import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"
import {useLayoutDevicesDispatch} from "../context/layoutDevicesContext";
import {setCurrentUserLights} from "../api/layout/layoutDevicesAPI";

interface Props {
    id: number;
    name: string;
    active: boolean;
}

function Preset({id, name, active}: Props) {
    const dispatch = useLayoutDevicesDispatch();

    const changeHandler = () => {
        setCurrentUserLights(dispatch, id);
    }

    return (
        <div className="flex bg-blue-300 rounded-lg py-2 px-6 justify-between">
            <div className="flex items-center font-bold text-sm text-center">
                <span>{name}</span>
            </div>
            <Toggle icons={false} defaultChecked={active} onChange={changeHandler}></Toggle>
        </div>
    );
}

export default Preset;