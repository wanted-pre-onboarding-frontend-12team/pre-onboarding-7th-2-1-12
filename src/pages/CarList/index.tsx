import * as S from './styled';
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
