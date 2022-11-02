import * as S from './styled';
import Image from '../../components/shared/Image';

const CarDetail = () => {
	const imgUrl: string = `https://blog.kakaocdn.net/dn/cFpDPS/btrmhg2fPGD/bNvrWQKWTuLzDmA0PcID8k/img.png`;
	return (
		<S.CarDetailWrap>
			<S.ImgWrap>
				<Image imgUrl={imgUrl} />
			</S.ImgWrap>
			<S.CarDetailTitle>
				<S.BrandName>brand</S.BrandName>
				<S.ModelName>name</S.ModelName>
				<S.MonthPrice>월 amount 원</S.MonthPrice>
			</S.CarDetailTitle>
		</S.CarDetailWrap>
	);
};
export default CarDetail;
