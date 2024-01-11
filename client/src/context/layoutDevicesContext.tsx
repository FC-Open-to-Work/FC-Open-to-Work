import React, {createContext} from "react";
import {LayoutDeviceType, LayoutDevicesType, LightType} from "../util/layoutDeviceTypes";

type Action = { type: "SET_DEVICES", data: {layoutDevices: LayoutDeviceType[]} } |
    { type: "TOGGLE_LIGHT", payload: { index: number } };
type Dispatch = (action: Action) => void;
type LayoutDevicesProviderProps = { children: React.ReactNode };

const LayoutDevicesContext = createContext<LayoutDevicesType>({lights: []});
const LayoutDevicesDispatchContext = createContext<Dispatch>(() => null);

const layoutDevicesReducer = (state: LayoutDevicesType, action: Action) => {
    switch (action.type) {
        case "SET_DEVICES":
            let lights = action.data.layoutDevices.filter(layoutDevice => layoutDevice.type === "LIGHT");
            let lightsArr: LightType[] = [];
            // Parse the response into an array of LightType objects
            lights.forEach(light => {
                let properties = JSON.parse(light.properties);
                lightsArr.push(
                    {
                        id: light.id,
                        name: properties.name,
                        locX: properties.locX,
                        locY: properties.locY,
                        on: light.on,
                        value: light.value
                    }
                );
            })

            return {
                ...state,
                lights: lightsArr
            };
        case "TOGGLE_LIGHT":
            return {
                ...state,
                // lights: setCurrentUserLights(state.lights, action.payload.index)
            };
        // default:
        //   throw new Error(`Unknown action type: ${typeof action}`);
    }
}

export const LayoutDevicesProvider = ({children}: LayoutDevicesProviderProps) => {
    const [layoutDevices, dispatch] = React.useReducer(layoutDevicesReducer, {lights: []});

    return (
        <LayoutDevicesDispatchContext.Provider value={dispatch}>
            <LayoutDevicesContext.Provider value={layoutDevices}>
                {children}
            </LayoutDevicesContext.Provider>
        </LayoutDevicesDispatchContext.Provider>
    );
}

export const useLayoutDevicesState = () => React.useContext(LayoutDevicesContext);
export const useLayoutDevicesDispatch = () => React.useContext(LayoutDevicesDispatchContext);