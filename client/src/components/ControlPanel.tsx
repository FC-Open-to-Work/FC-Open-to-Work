import React from 'react';
import Preset from "./Preset";
import {useLayoutDevicesState} from "../context/layoutDevicesContext";

function ControlPanel() {
    const {lights} = useLayoutDevicesState();

    return (
        <div className="overflow-auto flex flex-col gap-2 mb-4 lg:mb-0 flex-1 bg-blue-100 rounded-2xl px-4 py-2">
            <p className="font-bold text-xl">Presets:</p>
            {lights.map((light, index) =>
                <Preset key={index} index={index} name={light.name} active={light.on}></Preset>
            )}
        </div>
    );
}

export default ControlPanel;