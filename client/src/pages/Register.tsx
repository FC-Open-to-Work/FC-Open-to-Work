import * as React from "react";

import { FormEvent } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

export default function Register() {
  const [variables, setVariables] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  function submitRegisterForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const api_domain = process.env.BACKEND_API_DOMAIN
      ? process.env.BACKEND_API_DOMAIN
      : "localhost";
    const api_url =
      "http://" + api_domain + ":" + process.env.REACT_APP_BACKEND_API_PORT;

    if (variables.password === variables.confirmPassword) {
      axios
        .post(api_url + "/signup", {
          email: variables.email,
          username: variables.username,
          password: variables.password,
        })
        .then(function (response) {
          // handle success
          console.log(response);
          window.location.href = "/login";
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          if (error.response) {
            if (error.response.status === 409) {
              setErrors({ ...errors, email: error.response.data.error });
            } else {
              setErrors({
                ...errors,
                email: "Error from backend: " + error.response.status,
              });
            }
          } else if (error.request) {
            setErrors({
              ...errors,
              email: "No response",
            });
          } else {
            setErrors({
              ...errors,
              email: "Error when setting up the request",
            });
          }
        });
    } else {
      setErrors({ ...errors, confirmPassword: "password does not match" });
    }
  }

  return (
    // <Container className="justify-content-center">
    //   <Row className="justify-content-center pt-5">
    //     <Col className="bg-light p-5 justify-content-center" lg={6} md={8}>
    //       <h2 className="fs-2 text-dark text-center">Register</h2>
    //       <Form onSubmit={submitRegisterForm}>
    //         <Form.Group className="mb-3" controlId="RegisterEmail">
    //           <Form.Label className={errors.email && "text-danger"}>
    //             {errors.email || "Email address"}
    //           </Form.Label>
    //           <Form.Control
    //             type="email"
    //             value={variables.email}
    //             className={errors.email && "is-invalid"}
    //             onChange={(e) =>
    //               setVariables({ ...variables, email: e.target.value })
    //             }
    //             placeholder="Enter email"
    //           />
    //         </Form.Group>
    //
    //         <Form.Group className="mb-3" controlId="RegisterUsername">
    //           <Form.Label className={errors.username && "text-danger"}>
    //             {errors.username || "Username"}
    //           </Form.Label>
    //           <Form.Control
    //             type="text"
    //             value={variables.username}
    //             className={errors.username && "is-invalid"}
    //             onChange={(e) =>
    //               setVariables({ ...variables, username: e.target.value })
    //             }
    //             placeholder="Username"
    //           />
    //         </Form.Group>
    //
    //         <Form.Group className="mb-3" controlId="RegisterPassword">
    //           <Form.Label className={errors.password && "text-danger"}>
    //             {errors.password || "Password"}
    //           </Form.Label>
    //           <Form.Control
    //             type="password"
    //             value={variables.password}
    //             className={errors.password && "is-invalid"}
    //             onChange={(e) =>
    //               setVariables({ ...variables, password: e.target.value })
    //             }
    //             placeholder="******"
    //           />
    //         </Form.Group>
    //
    //         <Form.Group className="mb-3" controlId="RegisterConfirmPassword">
    //           <Form.Label className={errors.confirmPassword && "text-danger"}>
    //             {errors.confirmPassword || "Confirm Password"}
    //           </Form.Label>
    //           <Form.Control
    //             type="password"
    //             value={variables.confirmPassword}
    //             className={errors.confirmPassword && "is-invalid"}
    //             onChange={(e) =>
    //               setVariables({
    //                 ...variables,
    //                 confirmPassword: e.target.value,
    //               })
    //             }
    //             placeholder="******"
    //           />
    //         </Form.Group>
    //
    //         <div className="text-center">
    //           <Button variant="primary" type="submit">
    //             Register
    //           </Button>
    //           <br />
    //           <div className="mt-2">
    //             <FormText>
    //               Already have an account? <Link to="/login">Login</Link>
    //             </FormText>
    //           </div>
    //         </div>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
      <div>Register</div>
  );
}
