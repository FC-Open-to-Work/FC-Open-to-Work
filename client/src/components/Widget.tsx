// @flow
import * as React from 'react';
import Clock from "react-live-clock";
import {FaTemperatureHalf} from "react-icons/fa6";

export function Widget() {
    return (
        <div className="flex flex-col justify-center place-items-center flex-1 bg-blue-100 rounded-2xl p-2">
            <Clock format={'LTS'} ticking={true} className="shadow font-bold text-3xl text-orange-300 border-4 border-orange-300 px-1.5 py-0.5 rounded-md bg-white w-fit"></Clock>
            <Clock format={"ll"} className="text-xl font-bold mt-1"></Clock>
            <div className="mt-5 flex place-items-center">
                <FaTemperatureHalf size={25} className="text-orange-500"/>
                <div className="text-2xl font-bold">21&deg;C</div>
            </div>
        </div>
    );
}