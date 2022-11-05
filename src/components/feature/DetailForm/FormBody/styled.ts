import styled from 'styled-components';

export const FormBodyWrap = styled.div`
	padding: 0 20px;
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: ${({ theme }) => theme.fontWeights.normal};
	height: 48px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.bold {
		font-weight: ${({ theme }) => theme.fontWeights.bold};
	}
`;
