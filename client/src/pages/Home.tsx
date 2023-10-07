import { Console } from "console";
import * as React from "react";

import { Container } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useAuthDispatch } from "../context/auth";

export default function Home() {
  const authDispatch = useAuthDispatch();

  const logout = () => {
    authDispatch({ type: "LOGOUT" });
    window.location.href = "login";
  };

  return (
    <Container>
      <Row>
        <Col className="fs-1 text-center">Homepage</Col>
      </Row>
        Home
      <Row>
        <Col>
          <Button variant="link" className="w-auto " onClick={logout}>
            Logout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
