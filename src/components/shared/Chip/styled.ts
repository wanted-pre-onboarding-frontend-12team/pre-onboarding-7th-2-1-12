import styled from 'styled-components';

export const Chip = styled.div`
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.normal};
`;

export const Radio = styled.input`
	display: none;

	&:checked + label {
		background-color: ${({ theme }) => theme.colors.black};
		color: ${({ theme }) => theme.colors.white};
		border-radius: 62px;
		padding: 5px 18px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	+ label {
		background-color: ${({ theme }) => theme.colors.gray};
		color: ${({ theme }) => theme.colors.black};
		border-radius: 62px;
		padding: 5px 18px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
