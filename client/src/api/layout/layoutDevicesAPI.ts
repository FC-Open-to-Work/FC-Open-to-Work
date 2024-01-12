import {api_url} from "../../util/constants";
import axios from "axios";

const getCurrentUserDevices = (dispatch: any) => {
    axios
        .get(api_url + "/api/layout/device", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        })
        .then(function (response) {
            console.log(response.data);
            dispatch({type: "SET_DEVICES", data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
}

const setCurrentUserLights = (dispatch: any, id: number) => {
    dispatch({type: "TOGGLE_LIGHT", id: id});
    // Update the database
    axios
        .put(api_url + "/api/layout/device/" + id, {},
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                }
            })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export {getCurrentUserDevices, setCurrentUserLights};