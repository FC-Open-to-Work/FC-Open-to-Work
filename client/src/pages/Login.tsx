import * as React from "react";

import { FormEvent } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  const [variables, setVariables] = useState({
    username: "",
    password: "",
  });

  function submitLoginForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(variables);
  }

  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center pt-5">
        <Col className="bg-light p-5 justify-content-center" lg={6} md={8}>
          <h2 className="fs-2 text-dark text-center">Login</h2>
          <Form onSubmit={submitLoginForm}>
            <Form.Group className="mb-3" controlId="LoginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={variables.username}
                onChange={(e) =>
                  setVariables({ ...variables, username: e.target.value })
                }
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="LoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={variables.password}
                onChange={(e) =>
                  setVariables({ ...variables, password: e.target.value })
                }
                placeholder="Password"
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
