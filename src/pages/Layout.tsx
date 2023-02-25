import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import GuestRoute from "../components/shared/GuestRoute";
import React from "react";

const Layout: React.FC = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/login"
						element={
							<GuestRoute>
								<Login />
							</GuestRoute>
						}
					/>
					<Route
						path="/register"
						element={
							<GuestRoute>
								<Register />
							</GuestRoute>
						}
					/>
					<Route path="/home" element={<HomePage />} />
					<Route path="/*" element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
