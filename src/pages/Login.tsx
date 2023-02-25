import React, { useState } from "react";
import { Form, Label, Errors } from "../styles/form";
import { Container, Title } from "../styles/global";
import { Button } from "../styles/navbar";
import UserService from "../services/UserService";
import { User } from "../types/userTypes";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState<string[]>([]);
	const [user, setUserData] = useState<User>({
		email: "",
		password: "",
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setErrors([]);
			await UserService.login(user);
			return navigate("/home");
		} catch (error: unknown) {
			if (error instanceof Error) {
				setErrors([error.message]);
			}
		}
	};

	return (
		<Container>
			<Title>Login</Title>
			<Form onSubmit={handleSubmit}>
				<Label htmlFor="email" className="col-form-label col-25">
					Email:
				</Label>
				<br />
				<input
					className="form-control col-75"
					type="email"
					name="email"
					placeholder="Enter your email address..."
					value={user.email}
					required
					onChange={(e) => setUserData({ ...user, email: e.target.value })}
				/>
				<br />

				<Label htmlFor="password" className="col-form-label col-25">
					Password:
				</Label>
				<br />
				<input
					className="form-control col-75"
					type="password"
					name="password"
					required
					placeholder="Enter your password..."
					value={user.password}
					onChange={(e) => setUserData({ ...user, password: e.target.value })}
				/>
				<Errors>
					{errors.map((err, index) => (
						<p key={index}>{err}</p>
					))}
				</Errors>

				<Button type="submit" className="my-button mt-small">
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
