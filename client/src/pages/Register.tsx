import * as React from "react";

import {useState} from "react";

import Header from "../components/login-signup/Header";
import Input from "../components/login-signup/Input";
import FormAction from "../components/login-signup/formAction";
import {signupFields} from "../components/login-signup/formFields";
import {submitRegisterForm} from "../api/authentication/AuthFormSubmit";

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

    const renderVariableSetter = (field: string): any => {
        switch (field) {
            case 'email':
                return (e: any) => setVariables({...variables, email: e.target.value});
            case 'username':
                return (e: any) => setVariables({...variables, username: e.target.value});
            case 'password':
                return (e: any) => setVariables({...variables, password: e.target.value});
            case 'confirmPassword':
                return (e: any) => setVariables({...variables, confirmPassword: e.target.value});
            default:
                return (e: any) => {};
        }
    }

    const renderVariableGetter = (field: string): any => {
        switch (field) {
            case 'email':
                return variables.email;
            case 'username':
                return variables.username;
            case 'password':
                return variables.password;
            case 'confirmPassword':
                return variables.confirmPassword;
            default:
                return '';
        }
    }

    return (
        <div className="max-w-md w-full space-y-8">
            <Header
                heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/login"
            />
            <form className="mt-8 space-y-6" onSubmit={
                (e) => submitRegisterForm(e, variables, errors, setErrors)}>
                <div className="">
                    {signupFields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={renderVariableSetter(field.name)}
                            value={renderVariableGetter(field.name)}
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

                <FormAction text="Register"/>
            </form>
        </div>
    );
}
