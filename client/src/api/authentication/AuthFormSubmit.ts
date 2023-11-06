import {FormEvent} from "react";
import axios from "axios";

interface LoginVariables {
    email: string;
    password: string;
}

interface RegisterVariables {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

function submitLoginForm(e: FormEvent<HTMLFormElement>,
                         variables: LoginVariables,
                         errors: LoginVariables,
                         setErrors: any,
                         dispatch: any,
                         navigate: any) {
    e.preventDefault();

    const api_domain = process.env.BACKEND_API_DOMAIN
        ? process.env.BACKEND_API_DOMAIN
        : "localhost";
    const api_url =
        "http://" + api_domain + ":" + process.env.REACT_APP_BACKEND_API_PORT;

    console.log("login\n");

    axios
        .post(api_url + "/login", {
            email: variables.email,
            password: variables.password,
        })
        .then(function (response) {
            // handle success
            console.log(response);
            dispatch({type: "LOGIN", token: response.data.token, username: response.data.username});
            // window.location.href = "/";
            navigate("/");
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            if (error.response) {
                if (error.response.status === 401) {
                    setErrors({...errors, password: error.response.data.error});
                } else if (error.response.status === 404) {
                    setErrors({...errors, email: error.response.data.error});
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
            setTimeout(() => {
                setErrors({...errors, email: "", password: ""});
            }, 3000);
        });
}

function submitRegisterForm(e: FormEvent<HTMLFormElement>,
                            variables: RegisterVariables,
                            errors: RegisterVariables, setErrors: any) {
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
                        setErrors({...errors, email: error.response.data.error});
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
        setErrors({...errors, confirmPassword: "password does not match"});
    }
    setTimeout(() => {
        setErrors({...errors, username: "", email: "", password: "", confirmPassword: ""});
    }, 3000);
}

function logout (dispatch: any, navigate: any) {
    dispatch({type: "LOGOUT"});
    // window.location.href = "login";
    navigate("/login");
}

export {submitRegisterForm, submitLoginForm, logout};