import styled from 'styled-components';

type CarNameProps = {
	usage: 'list' | 'detail';
};

export const Container = styled.div<CarNameProps>`
	display: flex;
	flex-direction: column;
	padding: ${({ usage }) => (usage === 'detail' ? '1.2em' : '0.5em 0')};
`;

export const Brand = styled.span<CarNameProps>`
	font-size: ${({ usage, theme }) => (usage === 'list' ? theme.fontSizes.normal : theme.fontSizes.large)};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	line-height: ${({ usage, theme }) => (usage === 'list' ? theme.fontSizes.normal : theme.fontSizes.large)};
`;

export const Name = styled.span<CarNameProps>`
	font-size: ${({ usage, theme }) => (usage === 'list' ? theme.fontSizes.normal : theme.fontSizes.big)};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	line-height: ${({ usage, theme }) => (usage === 'list' ? theme.fontSizes.normal : theme.fontSizes.big)};
`;
