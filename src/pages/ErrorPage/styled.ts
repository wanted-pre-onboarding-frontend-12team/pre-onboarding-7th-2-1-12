import styled from 'styled-components';

export const ErrorWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 90vh;
`;
export const ErrorText = styled.p`
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const ErrorBtn = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 30px;
	border-radius: 12px;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
	font-size: ${({ theme }) => theme.fontSizes.normal};
	text-decoration: none;
`;
