import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	position: fixed;
	top: 0;
	width: 100%;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid black;
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	height: 60px;
	background-color: ${({ theme }) => theme.colors.white};
	z-index: 50;
	max-width: ${({ theme }) => theme.maxWidth};
`;

export const Header = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	.arrow {
		left: 1.25rem;
		position: absolute;
		cursor: pointer;
	}
`;
