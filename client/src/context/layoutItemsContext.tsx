import React, {createContext, useReducer, useContext} from "react";
import {LayoutItemsType, LayoutObjectType} from "../util/layoutItemTypes";
import {
    setCurrentUserLights
} from "../api/layoutItemsAPI";

type Action = { type: "SET_OBJECTS", data: {layoutObjects: LayoutObjectType[]} }
    | { type: "TOGGLE_LIGHT", payload: { index: number } };
type Dispatch = (action: Action) => void;
type LayoutItemsProviderProps = { children: React.ReactNode };

const LayoutItemsContext = createContext<LayoutItemsType>({walls: [], beds: [], lights: []});
const LayoutItemsDispatchContext = createContext<Dispatch>(() => null);

const layoutItemsReducer = (state: LayoutItemsType, action: Action) => {
    switch (action.type) {
        case "SET_OBJECTS":
            let walls = action.data.layoutObjects.filter(layoutObject => layoutObject.type === "WALL")[0];
            let beds = action.data.layoutObjects.filter(layoutObject => layoutObject.type === "BED")[0];
            return {
                ...state,
                walls: JSON.parse(walls.properties),
                beds: JSON.parse(beds.properties)
            };
        case "TOGGLE_LIGHT":
            return {
                ...state,
                lights: setCurrentUserLights(state.lights, action.payload.index)
            };
        // default:
        //   throw new Error(`Unknown action type: ${typeof action}`);
    }
}

export const LayoutItemsProvider = ({children}: LayoutItemsProviderProps) => {
    const [layoutItems, dispatch] = useReducer(layoutItemsReducer, {walls: [], beds: [], lights: []});

    return (
        <LayoutItemsDispatchContext.Provider value={dispatch}>
            <LayoutItemsContext.Provider value={layoutItems}>
                {children}
            </LayoutItemsContext.Provider>
        </LayoutItemsDispatchContext.Provider>
    );
}

export const useLayoutItemsState = () => useContext(LayoutItemsContext);
export const useLayoutItemsDispatch = () => useContext(LayoutItemsDispatchContext);