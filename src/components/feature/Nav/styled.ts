import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
	display: flex;
	width: 100%;
	margin-top: 5rem;
	height: 2.5rem;
	border-bottom: 1px solid black;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	display: flex;
	width: 80%;
	align-items: center;
	justify-content: center;
`;
