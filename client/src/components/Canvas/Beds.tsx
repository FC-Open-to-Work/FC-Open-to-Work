import React from 'react';

import Bed from "./Bed";
import {useLayoutItemsState} from "../../context/layoutItemsContext";

const Beds = () => {
    const {beds} = useLayoutItemsState();

    return (
        <>
            {beds.map((bed, index) =>
                <Bed
                    key={index.toString()}
                    locX={bed.locX}
                    locY={bed.locY}
                    size={bed.size}
                    orientation={bed.orientation}
                />)}
        </>
    );
};

export default Beds;