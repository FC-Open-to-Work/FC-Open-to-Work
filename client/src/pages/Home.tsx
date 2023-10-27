import {Console} from "console";
import * as React from "react";

import {Link} from "react-router-dom";
import CanvasContainer from "../components/CanvasContainer"

import {useAuthDispatch} from "../context/auth";

export default function Home() {
    const authDispatch = useAuthDispatch();

    const logout = () => {
        authDispatch({type: "LOGOUT"});
        window.location.href = "login";
    };

    return (
        // <Container className="vh-100">
        //     <Row>
        //         <Col className="fs-1 text-center">Homepage</Col>
        //     </Row>
        //     {/*TODO: need some height fixing here */}
        //     <Row className="h-100">
        //         <CanvasContainer />
        //     </Row>
        //     <Row>
        //         <Col>
        //             <Button variant="link" className="w-auto " onClick={logout}>
        //                 Logout
        //             </Button>
        //         </Col>
        //     </Row>
        // </Container>
        <div>
            Home
            <button onClick={logout}>Logout</button>
        </div>
    );
}
