import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import { NavBar, NavElement, Button } from "../styles/navbar";

function Navbar() {
	const navigate = useNavigate();
	const isAuthenticated = !!localStorage.getItem("token");

	async function handleLogout() {
		await UserService.logout();
		navigate("/login");
	}

	return (
		<NavBar>
			<NavElement>
				<Link to="/">Home Page</Link>
			</NavElement>

			{!isAuthenticated && (
				<NavElement>
					<Link to="/register">Register</Link>
				</NavElement>
			)}

			{!isAuthenticated && (
				<NavElement>
					<Link to="/login">Login</Link>
				</NavElement>
			)}

			{isAuthenticated && (
				<NavElement>
					<Button onClick={handleLogout}>Logout</Button>
				</NavElement>
			)}
		</NavBar>
	);
}

export default Navbar;
