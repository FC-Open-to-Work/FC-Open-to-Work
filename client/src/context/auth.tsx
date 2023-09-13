import React, { createContext, useReducer, useContext } from "react";

// import jwtDecode from "jwt-decode";

type Action = { type: "LOGIN"; token: string } | { type: "LOGOUT" };
type Dispatch = (action: Action) => void;
type State = { user: string };
type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext = createContext<State>({ user: "" });
const AuthDispatchContext = createContext<Dispatch>(() => null);

const token = localStorage.getItem("token");

let user: string = "";
// if (token) {
//   const decodedToken = jwtDecode(token);
//   const expiresAt = new Date(decodedToken.exp * 1000);

//   if (new Date() > expiresAt) {
//     localStorage.removeItem("token");
//   } else {
//     user = decodedToken;
//   }
// } else {
//   console.log("no token found");
// }

if (token) {
  user = token;
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
