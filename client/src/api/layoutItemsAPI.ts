import {LightType} from "../util/layoutItemTypes";
import {api_url} from "../util/constants";
import axios from "axios";

const getCurrentUserObjects = (dispatch: any) => {
    axios
        .get(api_url + "/api/layout/object", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        }).then(function (response) {
            console.log(response.data);
            dispatch({type: "SET_OBJECTS", data: response.data});
        }).catch(function (error) {
            console.log(error);
    });
}

const getCurrentUserLights = (dispatch: any) => {
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

export { getCurrentUserObjects, setCurrentUserLights };

