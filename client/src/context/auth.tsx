import React, { createContext, useReducer, useContext } from "react";

import jwtDecode from "jwt-decode";

type Action = { type: "LOGIN"; token: string } | { type: "LOGOUT" };
type Dispatch = (action: Action) => void;
type State = { user: string };
type AuthProviderProps = { children: React.ReactNode };

interface jwt {
  iss: string;
  sub: string;
  exp: number;
  // whatever else is in the JWT.
}

const AuthStateContext = createContext<State>({ user: "" });
const AuthDispatchContext = createContext<Dispatch>(() => null);

const token = localStorage.getItem("token");

let user: string = "";
if (token) {
  const decodedToken: jwt = jwtDecode<jwt>(token);
  console.log("type is: " + typeof decodedToken);
  console.log("token is: " + JSON.stringify(decodedToken));
  const expiresAt: Date = new Date(decodedToken.exp * 1000);

  if (new Date() > expiresAt) {
    localStorage.removeItem("token");
  } else {
    user = token;
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
        user: action.token,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        user: "",
      };
    // default:
    //   throw new Error(`Unknown action type: ${typeof action}`);
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { user });

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
