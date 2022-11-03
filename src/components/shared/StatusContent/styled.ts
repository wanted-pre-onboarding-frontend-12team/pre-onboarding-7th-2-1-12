import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.medium};
`;
