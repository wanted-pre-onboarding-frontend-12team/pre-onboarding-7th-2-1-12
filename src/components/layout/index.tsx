import { PropsWithChildren } from 'react';
import * as S from './styled';
import Header from './Header';

const Layout = (props: PropsWithChildren) => {
	return (
		<S.Container>
			<Header />
			{props.children}
		</S.Container>
	);
};

export default Layout;
