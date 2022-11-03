import * as S from './styled';
import Nav from '../../components/feature/Nav';
import { segmentDummyData, fuelTypeDummyData } from '@src/constants/attributeDummyData';
import { useRecoilState } from 'recoil';
import { SegmentAtom, fuelTypeAtom } from '../../recoil/atoms/ChipAtom';
import { CarListItem } from '@src/components';
import useCars from '@src/hooks/useCars';

const CarList = () => {
	const { cars, isLoading, isEmtpy } = useCars();
	const [segmentInfo, setSegmentInfo] = useRecoilState(SegmentAtom);
	const [fuelTypeInfo, setFuelTypeInfo] = useRecoilState(fuelTypeAtom);

	return (
		<S.Container>
			<Nav dummy={segmentDummyData} state={segmentInfo} setState={setSegmentInfo} />
			<Nav dummy={fuelTypeDummyData} state={fuelTypeInfo} setState={setFuelTypeInfo} />
			{isLoading && <S.Message>불러오는 중</S.Message>}
			{isEmtpy ? <S.Message>차량이 없습니다.</S.Message> : cars?.map((car) => <CarListItem key={car.id} car={car} />)}
		</S.Container>
	);
};

export default CarList;
