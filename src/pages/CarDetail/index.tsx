import * as S from './styled';
import Image from '../../components/shared/Image';
import useCar from '@src/hooks/useCar';
import { DetailForm } from '@src/components';
import { useParams } from 'react-router-dom';
import SEOMetaTag from '../../components/shared/SEOMetaTag';

const CarDetail = () => {
	const { id } = useParams<{ id: string }>();
	const { car } = useCar(id as string);

	return (
		<S.CarDetailWrap>
			<SEOMetaTag
				title={car.attribute.brand + car.attribute.name}
				description={`월 ${car.amount} 원`}
				imgsrc={car.attribute.imageUrl}
				url={`https://www.npmjs.com/package/react-helmet-async`}
			/>
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
