import React, { Dispatch, SetStateAction } from 'react';
import Chip from '@src/components/shared/Chip';
import * as S from './styled';
import { Chip as ChipType } from '@src/recoil/atoms/ChipAtom';
import { Attribute } from '@src/constants/attributeDummyData';

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
