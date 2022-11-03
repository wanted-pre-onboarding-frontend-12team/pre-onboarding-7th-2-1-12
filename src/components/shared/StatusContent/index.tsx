import { PropsWithChildren } from 'react';
import * as S from './styled';

const StatusContent = (props: PropsWithChildren) => {
	return <S.Container>{props.children}</S.Container>;
};

export default StatusContent;
