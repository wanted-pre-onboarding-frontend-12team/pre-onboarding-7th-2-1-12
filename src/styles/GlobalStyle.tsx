import * as styled from 'styled-components';
import reset from 'styled-reset';
import { size } from './theme';

const GlobalStyle = styled.createGlobalStyle`
	${reset};

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		max-width: '${size.mobile}px';
		margin: 0 auto;
		font-size: 16px;
	}

	ul,
	li {
		list-style: none;
	}
`;

export default GlobalStyle;
