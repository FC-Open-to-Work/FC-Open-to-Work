import {api_url} from "../../util/constants";
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

export { getCurrentUserObjects };

