import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.li`
	list-style: none;
`;

export const SLink = styled(Link)`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 7.5rem;
	padding: 1.2rem;
	border-bottom: 1px solid black;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.black};
`;

export const CarSepcDescription = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;

	> span {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;

export const ImageBackgroundWrapper = styled.div`
	position: relative;
	display: flex;
	width: 152px;
	height: 80px;

	> span {
		position: absolute;
		top: -0.5rem;
		right: 0;
		z-index: 2;
	}
`;

export const NewChip = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 52px;
	height: 22px;
	border-radius: 42px;
	font-size: ${({ theme }) => theme.fontSizes.small};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
`;
