import * as S from './styled';
import Nav from '../../components/feature/Nav';
import VehicleItem from '../../components/feature/VehicleItem';
import { segmentDummyData, fuelTypeDummyData } from '@src/constants/attributeDummyData';
import { useRecoilState } from 'recoil';
import { SegmentAtom, fuelTypeAtom } from '../../recoil/atoms/ChipAtom';
const CarList = () => {
	const [segmentInfo, setSegmentInfo] = useRecoilState(SegmentAtom);
	const [fuelTypeInfo, setFuelTypeInfo] = useRecoilState(fuelTypeAtom);
	return (
		<S.Container>
			<Nav dummy={segmentDummyData} perview={4.4} state={segmentInfo} setState={setSegmentInfo} />
			<Nav dummy={fuelTypeDummyData} perview={4} state={fuelTypeInfo} setState={setFuelTypeInfo} />
			<VehicleItem />
			{false && <S.Message>차량이 없습니다.</S.Message>}
			{true && <S.Message>불러오는 중</S.Message>}
		</S.Container>
	);
};

export default CarList;
