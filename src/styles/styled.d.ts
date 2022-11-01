import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		maxWidth: string;
		fontSizes: {
			small: string;
			normal: string;
			medium: string;
			large: string;
			big: string;
		};
		fontWeights: {
			normal: 400;
			medium: 500;
			bold: 700;
		};
		colors: {
			white: '#FFFFFF';
			gray: '#D9D9D9';
			black: '#000000';
			primary: '#0094ff';
		};
		device: {
			mobile: string;
		};
	}
}
