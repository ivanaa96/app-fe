import React from "react";
import { useQuery } from "react-query";
import UserService from "../services/UserService";
import { Title } from "../styles/global";
import { HomePageUser } from "../types/userTypes";

const HomePage: React.FC = () => {
	const { isLoading, data: user } = useQuery(
		"userData",
		(): Promise<HomePageUser> => {
			return UserService.getUser();
		},
		{ retry: false }
	);

	if (isLoading) {
		return <Title>Loading...</Title>;
	}

	return (
		<div>
			{user ? (
				<Title>
					Welcome {user.firstName} {user.lastName}!
				</Title>
			) : (
				<Title>Welcome guest!</Title>
			)}
		</div>
	);
};

export default HomePage;
