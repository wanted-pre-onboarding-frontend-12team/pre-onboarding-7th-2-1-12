import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import * as S from './styled';

const Nav = () => {
	return (
		<>
			<S.StyledSwiper slidesPerView={5.5} initialSlide={0} spaceBetween={0} loopFillGroupWithBlank={true}>
				<S.StyledSwiperSlide>1</S.StyledSwiperSlide>
				<S.StyledSwiperSlide>2</S.StyledSwiperSlide>
				<S.StyledSwiperSlide>3</S.StyledSwiperSlide>
				<S.StyledSwiperSlide>4</S.StyledSwiperSlide>
				<S.StyledSwiperSlide>5</S.StyledSwiperSlide>
				<S.StyledSwiperSlide>6</S.StyledSwiperSlide>
				<S.StyledSwiperSlide>7</S.StyledSwiperSlide>
			</S.StyledSwiper>
		</>
	);
};

export default Nav;
