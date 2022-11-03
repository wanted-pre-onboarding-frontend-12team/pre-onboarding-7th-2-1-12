import * as S from './styled';
import { Car } from '@src/types/car';
import Image from '../../shared/Image';
import { carAttributeTable } from '@src/constants/car';
import { isNewDate } from '@src/utils/DateUtils';
import { numberWithCommasConverter } from '@src/utils/StringUtils';

const CarListItem = ({ car }: { car: Car }) => {
	return (
		<S.Container>
			<S.SLink to={`/detail/${car.id}`}>
				<S.Information>
					<S.Brand>
						<span>{car.attribute.brand}</span>
						<span>{car.attribute.name}</span>
					</S.Brand>
					<S.Segment>
						<span>
							{carAttributeTable.segmentTable[car.attribute.segment]} / {carAttributeTable.fuelTable[car.attribute.fuelType]}
						</span>
						<span>월 {numberWithCommasConverter(car.amount)} 원 부터</span>
					</S.Segment>
				</S.Information>
				<S.Img>
					<Image imgUrl={car.attribute.imageUrl} />
					<p>{isNewDate(car.createdAt) && '신규'}</p>
				</S.Img>
			</S.SLink>
		</S.Container>
	);
};

export default CarListItem;
