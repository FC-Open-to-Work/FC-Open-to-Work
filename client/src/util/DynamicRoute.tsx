import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthState } from "../context/auth";

export default function DynamicRoute(props: {
  authenticated: boolean;
  element: any;
}) {
  const { user } = useAuthState();

  if (props.authenticated && !user) {
    return <Navigate to="/login" />;
  } else if (!props.authenticated && user) {
    return <Navigate to="/" />;
  } else {
    return props.element;
  }
}
