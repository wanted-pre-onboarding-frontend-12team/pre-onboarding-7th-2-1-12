import styled from 'styled-components';

export const CarDetailWrap = styled.div`
	height: calc(100vh - 60px);
	max-height: calc(100vh - 60px);
	margin-top: 60px;

	-ms-overflow-style: none;
	scrollbar-width: none;
	overflow-y: auto;

	&::-webkit-scrollbar {
		display: none;
	}

	@media ${({ theme }) => theme.device.mobile} {
		border-right: 1px solid ${({ theme }) => theme.colors.gray};
		border-left: 1px solid ${({ theme }) => theme.colors.gray};
	}
`;

export const ImgWrap = styled.div`
	width: 100%;
	height: 300px;
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
