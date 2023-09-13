import * as React from "react";

import { FormEvent } from "react";
import { useState } from "react";
import { Container, FormText } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";

import axios from "axios";

export default function Register() {
  const [variables, setVariables] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  function submitRegisterForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(variables);

    // axios
    //   .post("http://localhost:8080/register", {
    //     email: variables.email,
    //     username: variables.username,
    //     password: variables.password,
    //     confirmPassword: variables.confirmPassword,
    //   })
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //     window.location.href = "/login";
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });

    window.location.href = "/login";
  }

  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center pt-5">
        <Col className="bg-light p-5 justify-content-center" lg={6} md={8}>
          <h2 className="fs-2 text-dark text-center">Register</h2>
          <Form onSubmit={submitRegisterForm}>
            <Form.Group className="mb-3" controlId="RegisterEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={variables.email}
                onChange={(e) =>
                  setVariables({ ...variables, email: e.target.value })
                }
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="RegisterUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={variables.username}
                onChange={(e) =>
                  setVariables({ ...variables, username: e.target.value })
                }
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="RegisterPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={variables.password}
                onChange={(e) =>
                  setVariables({ ...variables, password: e.target.value })
                }
                placeholder="******"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="RegisterConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={variables.confirmPassword}
                onChange={(e) =>
                  setVariables({
                    ...variables,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="******"
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Register
              </Button>
              <br />
              <div className="mt-2">
                <FormText>
                  Already have an account? <Link to="/login">Login</Link>
                </FormText>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
