import styled from 'styled-components';

export const Container = styled.section`
	.DetailHeader {
		padding: 0 20px;
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		height: 48px;
		display: flex;
		align-items: center;
	}
	.DetailBody {
		padding: 0 20px;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: ${({ theme }) => theme.fontWeights.normal};
		height: 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.bold {
		font-weight: ${({ theme }) => theme.fontWeights.bold};
	}
`;
