import { PropsWithChildren } from 'react';
import * as S from './styled';

type Props = {
	usage: 'list' | 'detail';
	brand: string;
	name: string;
} & PropsWithChildren;

const CarName = (props: Props) => {
	return (
		<S.Container usage={props.usage}>
			<S.Brand usage={props.usage}>{props.brand}</S.Brand>
			<S.Name usage={props.usage}>{props.name}</S.Name>
			{props.children}
		</S.Container>
	);
};

export default CarName;
