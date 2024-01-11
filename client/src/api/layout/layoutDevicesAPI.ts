import {LightType} from "../../util/layoutDeviceTypes";
import {api_url} from "../../util/constants";
import axios from "axios";

const getCurrentUserDevices = (dispatch: any) => {
    axios
        .get(api_url + "/api/layout/device", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        }).then(function (response) {
            console.log(response.data);
            dispatch({type: "SET_DEVICES", data: response.data});
        }).catch(function (error) {
            console.log(error);
    });
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

export { getCurrentUserDevices, setCurrentUserLights };