import styled from 'styled-components';

export const FormHead = styled.p`
	padding: 0 20px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	height: 48px;
	display: flex;
	align-items: center;
`;
