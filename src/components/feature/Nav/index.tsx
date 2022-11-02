import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as S from './styled';
import { attributeDummyData } from '../../../constants/attributeDummyData';
import Chip from '../../shared/Chip';
import React from 'react';

const Nav = () => {
	return (
		<S.StyledSwiper slidesPerView={5} initialSlide={0} spaceBetween={0} loopFillGroupWithBlank={true}>
			{attributeDummyData &&
				attributeDummyData.map((item, index) => {
					return (
						<React.Fragment key={item.value}>
							{index === 0 && (
								<S.StyledSwiperSlide>
									<Chip value={'ALL'} name={item.type}>
										전체
									</Chip>
								</S.StyledSwiperSlide>
							)}
							<S.StyledSwiperSlide key={item.value}>
								<Chip value={item.value} name={item.type}>
									{item.name}
								</Chip>
							</S.StyledSwiperSlide>
						</React.Fragment>
					);
				})}
		</S.StyledSwiper>
	);
};

export default Nav;
