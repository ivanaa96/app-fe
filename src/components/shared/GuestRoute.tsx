import React from "react";
import { Navigate } from "react-router";

function GuestRoute({ children }: React.PropsWithChildren) {
	const token = localStorage.getItem("token");
	const isGuest = !token;

	return <>{isGuest ? children : <Navigate to="/" />}</>;
}

export default GuestRoute;
