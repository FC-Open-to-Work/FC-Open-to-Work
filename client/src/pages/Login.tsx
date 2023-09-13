import * as React from 'react';

import {Container} from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
      <Container className="justify-content-center">
        <Row>
          <Col className="bg-light p-5 justify-content-center">
            
            <Form>
              <Form.Group className="mb-3" controlId="LoginTitle">
                <Form.Text className="fs-2 text-dark">Login</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="LoginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="LoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }