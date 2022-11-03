import * as S from './styled';
import Nav from '../../components/feature/Nav';
import { CarListItem } from '@src/components';
import useCars from '@src/hooks/useCars';

const CarList = () => {
	const { cars, isLoading, isEmtpy } = useCars();

	return (
		<S.Container>
			<Nav />
			{isLoading && <S.Message>불러오는 중</S.Message>}
			{isEmtpy ? <S.Message>차량이 없습니다.</S.Message> : cars?.map((car) => <CarListItem key={car.id} car={car} />)}
		</S.Container>
	);
};

export default CarList;
