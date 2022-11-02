import { useNavigate } from 'react-router-dom';
import * as S from './styled';

const Error = () => {
	const navigate = useNavigate();
	const moveMain = () => {
		navigate('/');
	};
	return (
		<S.ErrorWrap>
			<S.ErrorText>존재하지 않는 페이지입니다.</S.ErrorText>
			<S.ErrorBtn onClick={moveMain}>메인으로 이동</S.ErrorBtn>
		</S.ErrorWrap>
	);
};

export default Error;
