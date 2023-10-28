import React from "react";

import {useNavigate} from "react-router-dom";

import CanvasContainer from "../components/CanvasContainer"

import {useAuthDispatch} from "../context/auth";

import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {HiOutlinePuzzle} from "react-icons/hi";
import {BiLogOut} from "react-icons/bi";
import {logo} from "../assets";

export default function Home() {
    const authDispatch = useAuthDispatch();

    const navigate = useNavigate();

    const logout = () => {
        authDispatch({type: "LOGOUT"});
        // window.location.href = "login";
        navigate("/login");
    };

    return (
        <>
        <aside id="sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto">
                <ul className="flex flex-col items-start py-3 h-full space-y-2 font-normal">
                    <li className="mb-3 w-full">
                        <a href="#" className="flex items-center p-2 text-gray-900">
                            <img
                                alt=""
                                className="h-[31px] w-[50px]"
                                src={logo}/>
                            <span className="text-lg font-bold">OTW Smart Home</span>
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100">
                            <AiOutlineHome size={30} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100">
                            <HiOutlinePuzzle size={30} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                        </a>
                    </li>
                    <li className="!mt-auto w-full">
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100">
                            <AiOutlineUser size={30} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100"
                        onClick={logout}>
                            <BiLogOut size={30} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">*/}
                    {/*        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">*/}
                    {/*            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>*/}
                    {/*        </svg>*/}
                    {/*        <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>*/}
                    {/*        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </aside>

    <div className="w-full h-full p-4 sm:ml-[14rem]">
        <div className="h-full bg-blue-200 rounded-2xl">

        </div>
    </div>
        </>
    );
}
