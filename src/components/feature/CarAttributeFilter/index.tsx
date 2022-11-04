import { Dispatch, SetStateAction } from 'react';
import Chip from '@src/components/shared/Chip';
import * as S from './styled';
import { Chip as ChipType } from '@src/recoil/atoms/ChipAtom';
import { Attribute } from '@src/constants/attributeDummyData';
import { checkArray } from '@src/utils/ArrayUtils';

type Props = {
	attributes: Attribute[];
	setState: Dispatch<SetStateAction<ChipType>>;
	state: ChipType;
};

const CarAttributeFilter = (props: Props) => {
	return (
		<S.StyledSwiper slidesPerView="auto" initialSlide={0} spaceBetween={8} loopFillGroupWithBlank={true}>
			{checkArray(props.attributes) &&
				props.attributes.map((attribute) => {
					return (
						<S.StyledSwiperSlide key={attribute.value}>
							<Chip name={attribute.type} value={attribute.value} state={props.state} setState={props.setState}>
								{attribute.name}
							</Chip>
						</S.StyledSwiperSlide>
					);
				})}
		</S.StyledSwiper>
	);
};

export default CarAttributeFilter;
