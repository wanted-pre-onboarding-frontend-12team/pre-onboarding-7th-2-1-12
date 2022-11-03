import * as S from './styled';
import Image from '../../components/shared/Image';
import useCar from '@src/hooks/useCar';
import { DetailForm } from '@src/components';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
	const { id } = useParams<{ id: string }>();
	const { car } = useCar(id as string);

	return (
		<S.CarDetailWrap>
			{car && (
				<>
					<S.ImgWrap>
						<Image imgUrl={car.attribute.imageUrl} />
					</S.ImgWrap>
					<S.CarDetailTitle>
						<S.BrandName>{car.attribute.brand}</S.BrandName>
						<S.ModelName>{car.attribute.name}</S.ModelName>
						<S.MonthPrice>월 {car.amount} 원</S.MonthPrice>
					</S.CarDetailTitle>
					<DetailForm car={car} />
				</>
			)}
		</S.CarDetailWrap>
	);
};
export default CarDetail;
