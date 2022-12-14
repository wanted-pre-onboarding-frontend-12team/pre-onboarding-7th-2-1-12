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

export const ImgaeBackgroundWrapper = styled.div`
	width: auto;
	height: 300px;
`;

export const CarDetailTitle = styled.div`
	padding: 20px;
`;

export const MonthPrice = styled.p`
	padding-top: 34px;
	text-align: right;
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.normal};
`;
