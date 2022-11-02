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
				attributeDummyData.map((item) => {
					return (
						<React.Fragment key={item.value}>
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
