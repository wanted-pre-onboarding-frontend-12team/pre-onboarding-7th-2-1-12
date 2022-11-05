import { Dispatch, SetStateAction } from 'react';
import Chip from '@src/components/shared/Chip';
import * as S from './styled';
import { CarFilter } from '@src/recoil/atoms/carFilter';
import { Attribute } from '@src/constants/attributeDummyData';
import { isValidArray } from '@src/utils/ArrayUtils';

type Props = {
	attributes: Attribute[];
	setState: Dispatch<SetStateAction<CarFilter>>;
	state: CarFilter;
};

const CarAttributeFilter = (props: Props) => {
	return (
		<S.StyledSwiper slidesPerView="auto" initialSlide={0} spaceBetween={8} loopFillGroupWithBlank={true}>
			{isValidArray(props.attributes) &&
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
