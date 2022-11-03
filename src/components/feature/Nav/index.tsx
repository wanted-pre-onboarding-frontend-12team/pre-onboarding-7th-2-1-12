import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as S from './styled';
import { Attribute } from '../../../constants/attributeDummyData';
import Chip from '../../shared/Chip';
import { Chip as ChipType } from '../../../recoil/atoms/ChipAtom';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
	dummy: Attribute[];
	setState: Dispatch<SetStateAction<ChipType>>;
	state: ChipType;
};

const Nav = (props: Props) => {
	return (
		<S.StyledSwiper slidesPerView="auto" initialSlide={0} spaceBetween={8} loopFillGroupWithBlank={true}>
			{props.dummy &&
				props.dummy.map((item) => {
					return (
						<React.Fragment key={item.value}>
							<S.StyledSwiperSlide key={item.value}>
								<Chip value={item.value} name={item.type} setState={props.setState} state={props.state}>
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
