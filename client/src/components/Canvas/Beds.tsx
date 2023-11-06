import React from 'react';

import Bed from "./Bed";
import {BedType} from "../../util/types";

interface BedsProps {
    beds: BedType[]
}

const Beds = ({beds}: BedsProps) => {
    return (
        <>
            {beds.map((bed, index) => <Bed
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