import { ImageBackground, CarName } from '@src/components';
import * as S from './styled';
import { Car } from '@src/types/car';
import { carAttributeTable } from '@src/constants/car';
import { isNewDate } from '@src/utils/DateUtils';
import { numberWithCommasConverter } from '@src/utils/StringUtils';

const CarListItem = ({ car }: { car: Car }) => {
	return (
		<S.Container>
			<S.SLink to={`/detail/${car.id}`}>
				<CarName usage="list" brand={car.attribute.brand} name={car.attribute.name}>
					<S.CarSepcDescription>
						<span>
							{carAttributeTable.segmentTable[car.attribute.segment]} / {carAttributeTable.fuelTable[car.attribute.fuelType]}
						</span>
						<span>월 {numberWithCommasConverter(car.amount)} 원 부터</span>
					</S.CarSepcDescription>
				</CarName>
				<S.ImageBackgroundWrapper>
					<ImageBackground imgUrl={car.attribute.imageUrl} />
					<S.NewChip>{isNewDate(car.createdAt) && '신규'}</S.NewChip>
				</S.ImageBackgroundWrapper>
			</S.SLink>
		</S.Container>
	);
};

export default CarListItem;
