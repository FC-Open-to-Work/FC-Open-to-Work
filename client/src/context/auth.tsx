import React, { createContext, useReducer, useContext } from "react";

import jwtDecode from "jwt-decode";

type Action = { type: "LOGIN"; token: string; username: string } | { type: "LOGOUT" };
type Dispatch = (action: Action) => void;
type State = { userToken: string, username: string };
type AuthProviderProps = { children: React.ReactNode };

interface jwt {
  iss: string;
  sub: string;
  exp: number;
  // whatever else is in the JWT.
}

const AuthStateContext = createContext<State>({ userToken: "", username: "" });
const AuthDispatchContext = createContext<Dispatch>(() => null);

const token = localStorage.getItem("token");

let userToken: string = "";
let username: string = "";
if (token) {
  const decodedToken: jwt = jwtDecode<jwt>(token);
  const expiresAt: Date = new Date(decodedToken.exp * 1000);

  if (new Date() > expiresAt) {
    localStorage.removeItem("token");
  } else {
    userToken = token;
  }
} else {
  console.log("no token found");
}

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.token);
      return {
        ...state,
        userToken: action.token,
        username: action.username
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        userToken: "",
        username: ""
      };
    // default:
    //   throw new Error(`Unknown action type: ${typeof action}`);
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { userToken, username });

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
