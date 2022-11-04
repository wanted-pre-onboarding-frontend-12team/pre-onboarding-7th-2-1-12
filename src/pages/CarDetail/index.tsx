import { useParams } from 'react-router-dom';
import * as S from './styled';
import Image from '../../components/shared/Image';
import useCar from '@src/hooks/useCar';
import { DetailForm } from '@src/components';
import { numberWithCommasConverter } from '@src/utils/StringUtils';
import SEOMetaTag from '../../components/shared/SEOMetaTag';
import { STALE_TIME } from '@src/constants/api';

const CarDetail = () => {
	const { id } = useParams<{ id: string }>();
	const { car, isLoading } = useCar(id as string, STALE_TIME);

	if (car === undefined && isLoading === false) {
		throw new Error('Not implemented.');
	}

	return (
		<S.CarDetailWrap>
			{car && (
				<>
					<SEOMetaTag
						title={`${car.attribute.brand} ${car.attribute.name}`}
						description={`월 ${car.amount} 원`}
						imgsrc={car.attribute.imageUrl}
						url="https://zesty-panda-9c4cf6.netlify.app"
					/>
					<S.ImgWrap>
						<Image imgUrl={car.attribute.imageUrl} />
					</S.ImgWrap>
					<S.CarDetailTitle>
						<S.BrandName>{car.attribute.brand}</S.BrandName>
						<S.ModelName>{car.attribute.name}</S.ModelName>
						<S.MonthPrice>월 {numberWithCommasConverter(car.amount)} 원</S.MonthPrice>
					</S.CarDetailTitle>
					<DetailForm car={car} />
				</>
			)}
		</S.CarDetailWrap>
	);
};
export default CarDetail;
