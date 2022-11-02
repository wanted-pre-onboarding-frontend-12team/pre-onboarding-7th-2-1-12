import styled from 'styled-components';

export const CarDetailWrap = styled.div``;

export const CarDetailTitle = styled.div`
	padding: 20px;
`;
export const BrandName = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.large};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const ModelName = styled.p`
	padding-bottom: 34px;
	font-size: ${({ theme }) => theme.fontSizes.big};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const MonthPrice = styled.p`
	text-align: right;
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.normal};
`;
