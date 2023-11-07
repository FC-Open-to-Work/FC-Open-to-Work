import {BedType, LightType} from "../util/layoutItemTypes";
import {Orientations, Sizes} from "../util/constants";

const getCurrentUserWalls = () => {
    let walls: number[][] = [];

    // MOCK DATA
    walls.push([100, 100, 700, 100]); // top
    walls.push([100, 100, 100, 500]); // left
    walls.push([100, 500, 550, 500]); // bottom
    walls.push([700, 100, 700, 500]); // right
    walls.push([675, 500, 700, 500]); // right

    walls.push([300, 100, 300, 400]); // bedroom wall long
    walls.push([300, 500, 300, 480]); // bedroom wall short

    walls.push([500, 100, 500, 125]); // living room wall short
    walls.push([500, 250, 500, 275]); // living room wall short
    walls.push([500, 275, 700, 275]); // living room wall long

    return walls;
}

const getCurrentUserBeds = () => {
    let beds: BedType[] = [];

    // MOCK DATA
    beds.push({ locX: 104, locY: 170, size: Sizes.QUEEN, orientation: Orientations.LEFT }); // bed
    beds.push({ locX: 547, locY: 160, size: Sizes.TWIN, orientation: Orientations.RIGHT }); // bed

    // beds.push({ locX: 300, locY: 700, size: Sizes.SINGLE, orientation: Orientations.UP }); // bed
    // beds.push({ locX: 500, locY: 700, size: Sizes.TWIN, orientation: Orientations.RIGHT }); // bed
    // beds.push({ locX: 700, locY: 700, size: Sizes.FULL, orientation: Orientations.DOWN }); // bed
    // beds.push({ locX: 900, locY: 700, size: Sizes.KING, orientation: Orientations.LEFT }); // bed
    return beds;
}

const getCurrentUserLights = () => {
    let lights: LightType[] = [];

    // MOCK DATA
    lights.push({ locX: 125, locY: 325, on: false}); // bed
    lights.push({ locX: 500, locY: 475, on: true}); // living room
    lights.push({ locX: 680, locY: 135, on: false}); // bedroom
    return lights;
}

export { getCurrentUserWalls, getCurrentUserBeds, getCurrentUserLights };

