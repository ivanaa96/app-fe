import React from "react";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }: React.PropsWithChildren) {
	const token = localStorage.getItem("token");
	const isAuthenticated = !!token;

	return <>{isAuthenticated ? children : <Navigate to="/login" />}</>;
}
