import styled from 'styled-components';

type ScrollBtnProps = {
	show: boolean;
};

export const ScrollBtn = styled.button<ScrollBtnProps>`
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	width: 50px;
	height: 50px;
	border-radius: 100%;
	background-color: white;
	color: cornflowerblue;
	border: 2px solid cornflowerblue;
	font-size: 18px;
	font-weight: bold;
	box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	transition: opacity 0.3s ease-in;
	opacity: ${({ show }) => (show ? 1 : 0)};
`;
