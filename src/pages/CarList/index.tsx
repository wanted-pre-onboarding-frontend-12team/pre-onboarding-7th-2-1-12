import { useRecoilState } from 'recoil';
import * as S from './styled';
import { CarListItem, StatusContent, Nav } from '@src/components';
import { SegmentAtom, fuelTypeAtom } from '@src/recoil/atoms/ChipAtom';
import useCars from '@src/hooks/useCars';
import { segmentDummyData, fuelTypeDummyData } from '@src/constants/attributeDummyData';

const CarList = () => {
	const { cars, isLoading, isEmtpy } = useCars();
	const [segmentInfo, setSegmentInfo] = useRecoilState(SegmentAtom);
	const [fuelTypeInfo, setFuelTypeInfo] = useRecoilState(fuelTypeAtom);

	return (
		<S.Container>
			<Nav dummy={segmentDummyData} state={segmentInfo} setState={setSegmentInfo} />
			<Nav dummy={fuelTypeDummyData} state={fuelTypeInfo} setState={setFuelTypeInfo} />
			<S.CarListScrollInnerWrapper>
				{isLoading && <StatusContent>불러오는 중</StatusContent>}
				{isEmtpy && <StatusContent>차량이 없습니다.</StatusContent>}
				{!isEmtpy && cars?.map((car) => <CarListItem key={car.id} car={car} />)}
			</S.CarListScrollInnerWrapper>
		</S.Container>
	);
};

export default CarList;
