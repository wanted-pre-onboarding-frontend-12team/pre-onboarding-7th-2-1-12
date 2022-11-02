import * as S from './styled';
import Image from '../../components/shared/Image';

export default function CarDetail() {
	const imgUrl: string = `https://blog.kakaocdn.net/dn/cFpDPS/btrmhg2fPGD/bNvrWQKWTuLzDmA0PcID8k/img.png`;
	const isDetailImg: boolean = true;
	return (
		<S.CarDetailWrap>
			<Image imgUrl={imgUrl} isDetailImg={isDetailImg} />
			<S.CarDetailTitle>
				<S.BrandName>brand</S.BrandName>
				<S.ModelName>name</S.ModelName>
				<S.MonthPrice>월 amount 원</S.MonthPrice>
			</S.CarDetailTitle>
		</S.CarDetailWrap>
	);
}
