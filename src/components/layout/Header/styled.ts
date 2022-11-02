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
	height: 5rem;
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
		display: inline-block;
		vertical-align: middle;
		color: ${({ theme }) => theme.colors.black};
		box-sizing: border-box;
		cursor: pointer;
		&:after,
		&:before {
			content: '';
			box-sizing: border-box;
		}
		width: 14px;
		height: 14px;
		border-radius: 3px;
		border-width: 3px 3px 0 0;
		border-style: solid;

		&:before {
			right: 0;
			top: -1.6px;
			position: absolute;
			height: 2.5px;
			border-radius: 3px;
			box-shadow: inset 0 0 0 32px;
			transform: rotate(-45deg);
			width: 16px;
			transform-origin: right top;
		}
		&:after {
			border-radius: 6px;
		}
		transform: rotate(-135deg);
	}
`;
