import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const access_token = !!localStorage.getItem("signInToken");

  return access_token ? children : <Navigate to="/signin" />;
}

export function PublicRoute({ children }) {
  const access_token = !!localStorage.getItem("signInToken");

  return access_token ? <Navigate to="/todo" /> : children;
}
