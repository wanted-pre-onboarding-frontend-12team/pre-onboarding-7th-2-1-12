import styled from 'styled-components';

export const CarDetailWrap = styled.div`
	background-color: aliceblue;
`;

export const CarDetailTitle = styled.div`
	padding: 20px;
`;

export const BrandName = styled.p`
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSizes.large};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ModelName = styled.p`
	padding-bottom: 34px;
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSizes.big};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const MonthPrice = styled.p`
	text-align: right;
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.normal};
`;
