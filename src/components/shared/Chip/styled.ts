import styled from 'styled-components';

export const Radio = styled.input`
	display: none;

	+ label {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px 18px;
		border-radius: 62px;
		background-color: ${({ theme }) => theme.colors.gray};
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		font-size: ${({ theme }) => theme.fontSizes.normal};
		color: ${({ theme }) => theme.colors.black};
	}

	&:checked + label {
		background-color: ${({ theme }) => theme.colors.black};
		color: ${({ theme }) => theme.colors.white};
	}
`;
