import React from 'react';
import Preset from "./Preset";

function ControlPanel() {
    return (
        <div className="overflow-auto flex flex-col gap-2 mb-4 lg:mb-0 flex-1 bg-blue-100 rounded-2xl px-4 py-2">
            <p className="font-bold text-xl">Presets:</p>
            <Preset name="Sleep" active={true}></Preset>
            <Preset name="Sleep" active={true}></Preset>
            <Preset name="Sleep" active={false}></Preset>
            <Preset name="Sleep" active={true}></Preset>
            <Preset name="Sleep" active={true}></Preset>
            <Preset name="Sleep" active={false}></Preset>
            <Preset name="Sleep" active={true}></Preset>
        </div>
    );
}

export default ControlPanel;