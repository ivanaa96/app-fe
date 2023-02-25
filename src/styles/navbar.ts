import styled from "styled-components";

export const NavBar = styled.nav`
	display: flex;
	justify-content: center;
	margin-top: 5px;
`;

export const NavElement = styled.li`
	margin: 0 3rem 6rem 3rem;
	font-size: 16px;
	padding-top: 15px;
	list-style-type: none;
`;

export const Button = styled.button`
	border-radius: 5px;
	background-color: #dfd1f0;
	padding: 6px 28px;
	font-size: 14px;
	cursor: pointer;
	border: none;
	transition: all 0.5s ease;

	&:hover {
		background-color: #c8abeb;
		transform: translateY(-0.5rem) scale(1.02);
		color: #000;
	}
`;
