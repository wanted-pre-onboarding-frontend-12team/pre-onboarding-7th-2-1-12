import * as S from './styled';
import Button from '../../components/shared/Button';
import DetailForm from '../../components/feature/DetailForm';
import Nav from '../../components/feature/Nav';
import VehicleItem from '../../components/feature/VehicleItem';

const CarList = () => {
	return (
		<S.Container>
			<Nav />
			<VehicleItem />
			{false && <S.Message>차량이 없습니다.</S.Message>}
			{true && <S.Message>불러오는 중</S.Message>}
		</S.Container>
	);
};

export default CarList;
