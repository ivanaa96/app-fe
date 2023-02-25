import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import { Form, Label, Errors } from "../styles/form";
import { Container, Title } from "../styles/global";
import { Button } from "../styles/navbar";
import { NewUser } from "../types/userTypes";

function Register() {
	const navigate = useNavigate();
	const [errors, setErrors] = useState<string[]>([]);
	const [newUser, setNewUser] = useState<NewUser>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setErrors([]);
			await UserService.register(newUser);
			return navigate("/home");
		} catch (error: unknown) {
			if (error instanceof Error) {
				setErrors([error.message]);
			}
		}
	};

	return (
		<Container>
			<Title>Register:</Title>
			<br />
			<Form className="login-form" onSubmit={handleSubmit}>
				<Label className="col-form-label col-25" htmlFor="first_name">
					First name:
				</Label>
				<br />
				<input
					type="text"
					name="first_name"
					className="form-control col-75"
					placeholder="Enter your first name..."
					value={newUser.firstName}
					onChange={(e) =>
						setNewUser({ ...newUser, firstName: e.target.value })
					}
					required
				/>
				<Label className="col-form-label col-25" htmlFor="last_name">
					Last name:
				</Label>
				<br />
				<input
					type="text"
					name="last_name"
					className="form-control col-75"
					placeholder="Enter your last name..."
					required
					value={newUser.lastName}
					onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
				/>
				<Label htmlFor="email" className="col-form-label col-25">
					Email:
				</Label>
				<br />
				<input
					className="form-control col-75"
					type="email"
					name="email"
					pattern="\S+@\S+\.\S+"
					placeholder="Enter your email..."
					required
					value={newUser.email}
					onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
				/>
				<Label htmlFor="password" className="col-form-label col-25">
					Password:
				</Label>
				<br />
				<input
					className="form-control col-75"
					type="password"
					name="password"
					placeholder="Enter your password..."
					required
					minLength={6}
					value={newUser.password}
					onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
				/>

				<Errors>
					{errors.map((err, index) => (
						<p key={index}>{err}</p>
					))}
				</Errors>

				<Button type="submit" className="my-button mt-small">
					Register
				</Button>
			</Form>
		</Container>
	);
}

export default Register;
