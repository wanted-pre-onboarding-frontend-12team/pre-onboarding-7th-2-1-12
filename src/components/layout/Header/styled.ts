import styled from 'styled-components';

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	display: flex;
	width: 100%;
	max-width: ${({ theme }) => theme.maxWidth};
	height: 60px;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	border-right: 1px solid ${({ theme }) => theme.colors.gray};
	border-left: 1px solid ${({ theme }) => theme.colors.gray};
	background-color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	z-index: 100;
`;

export const Header = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const BackArrowNavitationButton = styled.button`
	position: absolute;
	top: 1.125rem;
	left: 1.125rem;
	padding: 0;
	border: none;
	background: none;
	cursor: pointer;
`;
