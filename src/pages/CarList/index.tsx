import * as S from './styled';
import Button from '../../components/shared/Button';
import DetailForm from '../../components/feature/DetailForm';

const CarList = () => {
	return (
		<S.Container>
			{false && <S.Message>차량이 없습니다.</S.Message>}
			{true && <S.Message>불러오는 중</S.Message>}
		</S.Container>
	);
};

export default CarList;
