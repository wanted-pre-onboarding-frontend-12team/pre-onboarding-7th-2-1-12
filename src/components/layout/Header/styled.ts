import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	position: fixed;
	top: 0;
	width: 100%;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	border-right: 1px solid ${({ theme }) => theme.colors.gray};
	border-left: 1px solid ${({ theme }) => theme.colors.gray};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	height: 60px;
	background-color: ${({ theme }) => theme.colors.white};
	max-width: ${({ theme }) => theme.maxWidth};
	z-index: 100;
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
