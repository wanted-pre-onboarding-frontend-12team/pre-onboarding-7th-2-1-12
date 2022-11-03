import styled from 'styled-components';

export const Container = styled.section`
	height: calc(100vh-5rem);
	margin-top: 5rem;
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
`;

export const Message = styled.div`
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.medium};

	display: flex;
	justify-content: center;
	align-items: center;
`;
