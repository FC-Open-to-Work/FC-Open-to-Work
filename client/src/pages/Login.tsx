import * as React from "react";

import {useState} from "react";

import {useAuthDispatch} from "../context/auth";

import Header from "../components/login-signup/Header";
import Input from "../components/login-signup/Input";
import FormAction from "../components/login-signup/formAction";
import {loginFields} from "../components/login-signup/formFields";
import {submitLoginForm} from "../api/authentication/AuthFormSubmit";

export default function Login() {
    const [variables, setVariables] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const dispatch = useAuthDispatch();

    return (
        <div className="max-w-md w-full space-y-8">
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Register"
                linkUrl="/register"
            />
            <form className="mt-8 space-y-6" onSubmit={
                (e) => submitLoginForm(e, variables, errors, setErrors, dispatch)}>
                <div className="space-y-px">
                    {loginFields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={(field.name === "email") ? (e) =>
                                setVariables({...variables, email: e.target.value}) : (e) =>
                                setVariables({...variables, password: e.target.value})}
                            value={(field.name === "email") ? variables.email : variables.password}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            errors={errors}
                        />
                    )}
                </div>

                <FormAction text="Login"/>
            </form>
        </div>
    );
}
