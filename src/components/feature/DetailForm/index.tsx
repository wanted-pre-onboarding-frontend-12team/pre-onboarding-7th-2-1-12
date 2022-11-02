import React from 'react';
import * as S from './styled';

const DetailForm = ({}) => {
	const info = '차량 정보';

	return (
		<S.Container>
			<p className="DetailHeader">{info}</p>
			<div className="DetailBody">
				<span className="bold">대인</span>
				<span>무한</span>
			</div>
		</S.Container>
	);
};

export default DetailForm;
