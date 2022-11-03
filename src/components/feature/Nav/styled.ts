import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
	display: flex;
	width: auto;
	height: 39px;
	border-bottom: 1px solid black;
	padding-left: 12px;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	display: flex;
	width: auto;
	align-items: center;
	justify-content: center;
`;
