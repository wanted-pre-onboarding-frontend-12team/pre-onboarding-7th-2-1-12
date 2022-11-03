import { DefaultTheme } from 'styled-components';

const pixelToRem = (size: number) => `${size / 16}rem`;

export const size = {
	mobile: 450,
	desktop: 1280,
};

const theme: DefaultTheme = {
	maxWidth: pixelToRem(size.desktop),
	fontSizes: {
		small: pixelToRem(12),
		normal: pixelToRem(14),
		medium: pixelToRem(17),
		large: pixelToRem(20),
		big: pixelToRem(24),
	},
	fontWeights: {
		normal: 400,
		medium: 500,
		bold: 700,
	},
	colors: {
		white: '#FFFFFF',
		gray: '#D9D9D9',
		black: '#000000',
		primary: '#0094ff',
	},
	device: {
		mobile: `screen and (min-width: ${size.mobile}px)`,
	},
};

export default theme;
