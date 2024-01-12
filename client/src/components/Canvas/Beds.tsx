import React from 'react';

import Bed from "./Bed";
import {useLayoutObjectsState} from "../../context/layoutObjectsContext";

const Beds = () => {
    const {beds} = useLayoutObjectsState();

    return (
        <>
            {beds.map((bed, index) =>
                <Bed
                    key={index.toString()}
                    id={bed.id}
                    locX={bed.locX}
                    locY={bed.locY}
                    size={bed.size}
                    orientation={bed.orientation}
                />)}
        </>
    );
};

export default Beds;