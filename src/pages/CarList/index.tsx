import { useRecoilState } from 'recoil';
import { CarListItem, StatusContent, CarAttributeFilter } from '@src/components';
import * as S from './styled';
import { SegmentAtom, fuelTypeAtom } from '@src/recoil/atoms/ChipAtom';
import useCars from '@src/hooks/useCars';
import { segmentDummyData, fuelTypeDummyData } from '@src/constants/attributeDummyData';
import { queryStringGenerator } from '@src/utils/StringUtils';

const CarList = () => {
	const [segmentInfo, setSegmentInfo] = useRecoilState(SegmentAtom);
	const [fuelTypeInfo, setFuelTypeInfo] = useRecoilState(fuelTypeAtom);
	const { cars, isLoading, isEmtpy } = useCars(
		queryStringGenerator({ fuelType: fuelTypeInfo.value, segment: segmentInfo.value }, ['ALL-fuel', 'ALL-segment']),
	);

	return (
		<S.Container>
			<CarAttributeFilter attributes={segmentDummyData} state={segmentInfo} setState={setSegmentInfo} />
			<CarAttributeFilter attributes={fuelTypeDummyData} state={fuelTypeInfo} setState={setFuelTypeInfo} />
			<S.CarListScrollInnerWrapper>
				{isLoading && <StatusContent>불러오는 중</StatusContent>}
				{!isLoading && isEmtpy && <StatusContent>차량이 없습니다.</StatusContent>}
				{!isEmtpy && cars?.map((car) => <CarListItem key={car.id} car={car} />)}
			</S.CarListScrollInnerWrapper>
		</S.Container>
	);
};

export default CarList;
