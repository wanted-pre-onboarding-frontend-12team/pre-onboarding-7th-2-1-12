import { useParams } from 'react-router-dom';
import * as S from './styled';
import { SEO, DetailForm, CarName, ImageBackground } from '@src/components';
import useCar from '@src/hooks/useCar';
import { numberWithCommasConverter } from '@src/utils/StringUtils';

const CarDetail = () => {
	const { id } = useParams<{ id: string }>();
	const { car, isLoading } = useCar(id as string);

	if (car === undefined && isLoading === false) {
		throw new Error('Not implemented.');
	}

	return (
		<S.CarDetailWrap>
			{car && (
				<>
					<SEO
						title={`${car.attribute.brand} ${car.attribute.name}`}
						description={`월 ${car.amount} 원`}
						imgsrc={car.attribute.imageUrl}
						url="https://zesty-panda-9c4cf6.netlify.app"
					/>
					<S.ImgaeBackgroundWrapper>
						<ImageBackground imgUrl={car.attribute.imageUrl} />
					</S.ImgaeBackgroundWrapper>
					<CarName brand={car.attribute.brand} name={car.attribute.name} usage="detail">
						<S.MonthPrice>월 {numberWithCommasConverter(car.amount)} 원</S.MonthPrice>
					</CarName>
					<DetailForm car={car} />
				</>
			)}
		</S.CarDetailWrap>
	);
};
export default CarDetail;
