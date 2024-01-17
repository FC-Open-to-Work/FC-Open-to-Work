const api_domain = process.env.REACT_APP_BACKEND_API_DOMAIN
    ? process.env.REACT_APP_BACKEND_API_DOMAIN
    : "localhost";

// const api_url =
//     "http://" + api_domain + ":" + process.env.REACT_APP_BACKEND_API_PORT;
const api_url =
    "http://" + api_domain;

enum Sizes {
    SINGLE,
    TWIN,
    FULL,
    QUEEN,
    KING
}

enum Orientations {
    UP = 0,
    RIGHT = 90,
    DOWN = 180,
    LEFT = 270
}

export {Sizes, Orientations, api_url};