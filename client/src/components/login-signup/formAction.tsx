import React from "react";

interface Props {
    type?: string;
    action?: any;
    text: string;
}

export default function FormAction ({ type = 'Button', action = 'submit', text}: Props) {
    return (
        <>
            {
                type === 'Button' ?
                    <button
                        type={action}
                        className="group relative w-full flex justify-center
                        py-2 px-4 border border-transparent text-sm font-medium
                        rounded-md text-white bg-blue-400 hover:bg-blue-500
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-blue-500 mt-10"
                    >

                        {text}
                    </button>
                    :
                    <></>
            }
        </>
    )
}