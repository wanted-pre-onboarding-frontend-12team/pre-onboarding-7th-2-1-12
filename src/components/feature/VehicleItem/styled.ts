import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	width: 100%;
	padding: 1.2rem;
	border-bottom: 1px solid black;
	justify-content: space-between;
	height: 7.5rem;
	color: ${({ theme }) => theme.colors.black};
`;

export const Information = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	line-height: 1.05rem;
`;
export const Brand = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem 0;

	> span {
		font-size: ${({ theme }) => theme.fontSizes.normal};
		font-weight: ${({ theme }) => theme.fontWeights.bold};
	}
`;

export const Segment = styled.div`
	display: flex;
	flex-direction: column;

	> span {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;

export const Img = styled.div`
	display: flex;
	position: relative;
	width: 152px;
	height: 80px;
	> p {
		position: absolute;
		right: 0;
		top: -0.5rem;
		z-index: 2;
	}
`;

export const NewChip = styled.p`
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.normal};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	width: 52px;
	height: 22px;
	border-radius: 42px;
	font-size: ${({ theme }) => theme.fontSizes.small};
	display: flex;
	justify-content: center;
	align-items: center;
`;
