import {BedType, LightType} from "../util/layoutItemTypes";
import {Orientations, Sizes} from "../util/constants";

const getCurrentUserWalls = () => {
    let walls: string = localStorage.getItem("walls") || "";
    let wallsArr: number[][] = [];

    if (!walls) {
        // MOCK DATA
        wallsArr.push([100, 100, 700, 100]); // top
        wallsArr.push([100, 100, 100, 500]); // left
        wallsArr.push([100, 500, 550, 500]); // bottom
        wallsArr.push([700, 100, 700, 500]); // right
        wallsArr.push([675, 500, 700, 500]); // right

        wallsArr.push([300, 100, 300, 400]); // bedroom wall long
        wallsArr.push([300, 500, 300, 480]); // bedroom wall short

        wallsArr.push([500, 100, 500, 125]); // living room wall short
        wallsArr.push([500, 250, 500, 275]); // living room wall short
        wallsArr.push([500, 275, 700, 275]); // living room wall long
        localStorage.setItem("walls", JSON.stringify(wallsArr));
    } else {
        wallsArr = JSON.parse(walls);
    }

    return wallsArr;
}

const getCurrentUserBeds = () => {
    let beds: string = localStorage.getItem("beds") || "";
    let bedsArr: BedType[] = [];

    if (!beds) {
        // MOCK DATA
        // bedsArr.push({ locX: 104, locY: 170, size: Sizes.QUEEN, orientation: Orientations.LEFT }); // bed
        // bedsArr.push({ locX: 547, locY: 160, size: Sizes.TWIN, orientation: Orientations.RIGHT }); // bed
        localStorage.setItem("beds", JSON.stringify(bedsArr));
    } else {
        bedsArr = JSON.parse(beds);
    }

    // bedsArr.push({ locX: 300, locY: 700, size: Sizes.SINGLE, orientation: Orientations.UP }); // bed
    // bedsArr.push({ locX: 500, locY: 700, size: Sizes.TWIN, orientation: Orientations.RIGHT }); // bed
    // bedsArr.push({ locX: 700, locY: 700, size: Sizes.FULL, orientation: Orientations.DOWN }); // bed
    // bedsArr.push({ locX: 900, locY: 700, size: Sizes.KING, orientation: Orientations.LEFT }); // bed
    return bedsArr;
}

const getCurrentUserLights = () => {
    let lights = localStorage.getItem("lights") || "";
    let lightsArr: LightType[] = [];

    if (!lights) {
        // MOCK DATA
        // lightsArr.push({ name: "bedroom light", locX: 125, locY: 325, on: false}); // bed
        // lightsArr.push({ name: "living room light", locX: 500, locY: 475, on: true}); // living room
        // lightsArr.push({ name: "bedroom light 2", locX: 680, locY: 135, on: false}); // bedroom
        localStorage.setItem("lights", JSON.stringify(lightsArr));
    } else {
        lightsArr = JSON.parse(lights);
    }

    return lightsArr;
}

const setCurrentUserLights = (lights: LightType[], lightIndex: number) => {
    const newLights = lights.map((light, index) => {
        if (index === lightIndex) {
            return {
                ...light,
                on: !light.on
            }
        }
        return light;
    });
    localStorage.setItem("lights", JSON.stringify(newLights));
    return newLights;
}

export { getCurrentUserWalls, getCurrentUserBeds, getCurrentUserLights, setCurrentUserLights };

