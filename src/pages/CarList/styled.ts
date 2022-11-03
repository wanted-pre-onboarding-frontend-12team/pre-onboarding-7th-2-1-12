import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	height: calc(100vh-60px);
	margin-top: 60px;
	.cheap {
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		font-size: ${({ theme }) => theme.fontSizes.normal};
		background-color: ${({ theme }) => theme.colors.gray};
		color: ${({ theme }) => theme.colors.black};
		width: 62px;
		height: 27px;
		border-radius: 62px;
	}

	.active {
		background-color: ${({ theme }) => theme.colors.black};
		color: ${({ theme }) => theme.colors.white};
	}

	.new {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
		width: 52px;
		height: 22px;
		border-radius: 42px;
		font-size: ${({ theme }) => theme.fontSizes.small};
	}

	@media ${({ theme }) => theme.device.mobile} {
		border-right: 1px solid ${({ theme }) => theme.colors.gray};
		border-left: 1px solid ${({ theme }) => theme.colors.gray};
	}
`;

export const CarListScrollInnerWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 138px);
	max-height: calc(100vh - 138px);

	-ms-overflow-style: none;
	scrollbar-width: none;
	overflow-y: auto;

	&::-webkit-scrollbar {
		display: none;
	}
`;
