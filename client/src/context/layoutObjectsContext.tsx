import React, {createContext, useReducer, useContext} from "react";
import {LayoutObjectType, LayoutObjectsType} from "../util/layoutObjectTypes";

type Action = { type: "SET_OBJECTS", data: {layoutObjects: LayoutObjectType[]} }
type Dispatch = (action: Action) => void;
type LayoutObjectsProviderProps = { children: React.ReactNode };

const LayoutObjectsContext = createContext<LayoutObjectsType>({walls: [], beds: []});
const LayoutObjectsDispatchContext = createContext<Dispatch>(() => null);

const layoutObjectsReducer = (state: LayoutObjectsType, action: Action) => {
    switch (action.type) {
        case "SET_OBJECTS":
            // Both walls and beds are condensed into a single object with properties specifying the coordinates of multiple walls/beds
            let walls = action.data.layoutObjects.filter(layoutObject => layoutObject.type === "WALL")[0];
            let beds = action.data.layoutObjects.filter(layoutObject => layoutObject.type === "BED")[0];

            // TODO: Currently not using ID, not planning to. Using beds/walls as immutables
            return {
                ...state,
                walls: JSON.parse(walls.properties),
                beds: JSON.parse(beds.properties)
            };
        // default:
        //   throw new Error(`Unknown action type: ${typeof action}`);
    }
}

export const LayoutObjectsProvider = ({children}: LayoutObjectsProviderProps) => {
    const [layoutObjects, dispatch] = useReducer(layoutObjectsReducer, {walls: [], beds: []});

    return (
        <LayoutObjectsDispatchContext.Provider value={dispatch}>
            <LayoutObjectsContext.Provider value={layoutObjects}>
                {children}
            </LayoutObjectsContext.Provider>
        </LayoutObjectsDispatchContext.Provider>
    );
}

export const useLayoutObjectsState = () => useContext(LayoutObjectsContext);
export const useLayoutObjectsDispatch = () => useContext(LayoutObjectsDispatchContext);