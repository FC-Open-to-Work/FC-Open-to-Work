import React from "react";

const fixedInputClass = "rounded-md appearance-none " +
    "relative block w-full px-3 py-2 border " +
    "border-gray-300 placeholder-gray-500 " +
    "text-gray-900 focus:outline-none focus:ring-blue-500 " +
    "focus:border-blue-500 focus:z-10 sm:text-sm"

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    isRequired?: boolean;
    placeholder?: string;
    customClass?: string;
    errors: any;
}

export default function Input({
                                  handleChange,
                                  value,
                                  labelText,
                                  labelFor,
                                  id,
                                  name,
                                  type,
                                  isRequired = false,
                                  placeholder,
                                  customClass,
                                  errors
                              }: Props) {
    const getErrorMessage = (name: string) => {
        switch (name) {
            case "username":
                return errors.username;
            case "email":
                return errors.email;
            case "password":
                return errors.password;
            case "confirmPassword":
                return errors.confirmPassword;
            default:
                return null;
        }
    }

    return (
        <div className="my-5">
            <label htmlFor={labelFor} className={getErrorMessage(name) && "text-red-600"}>
                {getErrorMessage(name) || labelText}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + customClass}
                placeholder={placeholder}
            />
        </div>
    )
}