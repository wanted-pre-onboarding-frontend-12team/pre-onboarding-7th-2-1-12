import { useRecoilState } from 'recoil';
import { CarListItem, StatusContent, CarAttributeFilter } from '@src/components';
import * as S from './styled';
import { segmentFilterAtom, fuelFilterAtom, defaultFilters } from '@src/recoil/atoms/carFilter';
import useCars from '@src/hooks/useCars';
import { segmentDummyData, fuelTypeDummyData } from '@src/constants/attributeDummyData';
import { queryStringGenerator } from '@src/utils/StringUtils';
import SkeletonCarList from '@src/components/skeleton/SkeletonCarList';

const CarList = () => {
	const [segmentFilter, setSegmentFilter] = useRecoilState(segmentFilterAtom);
	const [fuelFilter, setFuelFilter] = useRecoilState(fuelFilterAtom);
	const { cars, isLoading, isEmtpy } = useCars(
		queryStringGenerator({ fuelType: fuelFilter.value, segment: segmentFilter.value }, [
			defaultFilters.FUEL,
			defaultFilters.SEGMENT,
		]),
	);

	return (
		<S.Container>
			<CarAttributeFilter attributes={segmentDummyData} state={segmentFilter} setState={setSegmentFilter} />
			<CarAttributeFilter attributes={fuelTypeDummyData} state={fuelFilter} setState={setFuelFilter} />
			<S.CarListScrollInnerWrapper>
				{isFetching && <SkeletonCarList />}
				{!isLoading && isEmtpy && <StatusContent>차량이 없습니다.</StatusContent>}
				{!isEmtpy && cars?.map((car) => <CarListItem key={car.id} car={car} />)}
			</S.CarListScrollInnerWrapper>
		</S.Container>
	);
};

export default CarList;
