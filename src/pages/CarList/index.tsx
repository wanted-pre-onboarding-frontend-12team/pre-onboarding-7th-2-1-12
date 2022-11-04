import { useRecoilState } from 'recoil';
import * as S from './styled';
import { CarListItem, StatusContent, Nav } from '@src/components';
import { SegmentAtom, fuelTypeAtom } from '@src/recoil/atoms/ChipAtom';
import useCars from '@src/hooks/useCars';
import { segmentDummyData, fuelTypeDummyData } from '@src/constants/attributeDummyData';
import { queryStringGenerator } from '@src/utils/StringUtils';
import SkeletonCarList from '@src/components/skeleton/SkeletonCarList';

const CarList = () => {
	const [segmentInfo, setSegmentInfo] = useRecoilState(SegmentAtom);
	const [fuelTypeInfo, setFuelTypeInfo] = useRecoilState(fuelTypeAtom);
	const { cars, isLoading, isEmtpy, isFetching } = useCars(
		queryStringGenerator({ fuelType: fuelTypeInfo.value, segment: segmentInfo.value }, ['ALL-fuel', 'ALL-segment']),
	);

	return (
		<S.Container>
			<Nav dummy={segmentDummyData} state={segmentInfo} setState={setSegmentInfo} />
			<Nav dummy={fuelTypeDummyData} state={fuelTypeInfo} setState={setFuelTypeInfo} />
			<S.CarListScrollInnerWrapper>
				{isFetching && <SkeletonCarList />}
				{!isLoading && isEmtpy && <StatusContent>차량이 없습니다.</StatusContent>}
				{!isEmtpy && cars?.map((car) => <CarListItem key={car.id} car={car} />)}
			</S.CarListScrollInnerWrapper>
		</S.Container>
	);
};

export default CarList;
