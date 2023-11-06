import {BedType} from "../util/types";
import {Orientations, Sizes} from "../util/constants";

const getCurrentUserWalls = () => {
    let walls: number[][] = [];

    // MOCK DATA
    walls.push([100, 100, 700, 100]); // top
    walls.push([100, 100, 100, 500]); // left
    walls.push([100, 500, 550, 500]); // bottom
    walls.push([700, 100, 700, 500]); // right

    walls.push([300, 100, 300, 400]); // wall 1
    walls.push([300, 500, 300, 480]); // wall 1


    return walls;
}

const getCurrentUserBeds = () => {
    let beds: BedType[] = [];

    // MOCK DATA
    beds.push({ locX: 101, locY: 170, size: Sizes.QUEEN, orientation: Orientations.LEFT }); // bed

    // beds.push({ locX: 300, locY: 700, size: Sizes.SINGLE, orientation: Orientations.UP }); // bed
    // beds.push({ locX: 500, locY: 700, size: Sizes.TWIN, orientation: Orientations.RIGHT }); // bed
    // beds.push({ locX: 700, locY: 700, size: Sizes.FULL, orientation: Orientations.DOWN }); // bed
    // beds.push({ locX: 900, locY: 700, size: Sizes.KING, orientation: Orientations.LEFT }); // bed
    return beds;
}

export { getCurrentUserWalls, getCurrentUserBeds };

