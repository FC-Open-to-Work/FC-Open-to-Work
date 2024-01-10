import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthState } from "../context/authContext";

export default function DynamicRoute(props: {
  authenticated: boolean;
  element: any;
}) {
  const { userToken } = useAuthState();

  if (props.authenticated && !userToken) {
    return <Navigate to="/login" />;
  } else if (!props.authenticated && userToken) {
    return <Navigate to="/" />;
  } else {
    return props.element;
  }
}
