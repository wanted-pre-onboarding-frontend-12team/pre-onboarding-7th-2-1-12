import * as S from './styled';
import Image from '../../components/shared/Image';

export default function CarDetail() {
	return (
		<S.CarDetailWrap>
			<Image />
			<S.CarDetailTitle>
				<S.BrandName>brand</S.BrandName>
				<S.ModelName>name</S.ModelName>
				<S.MonthPrice>월 amount 원</S.MonthPrice>
			</S.CarDetailTitle>
		</S.CarDetailWrap>
	);
}
