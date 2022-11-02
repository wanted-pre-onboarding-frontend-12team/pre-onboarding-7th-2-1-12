import { PropsWithChildren } from 'react';
import * as S from './styled';

type Props = {
	value: string;
	name: string;
} & PropsWithChildren;

const Chip = ({ children, ...props }: Props) => {
	let groupName = props.name;
	if (props.name === 'fuelType' || props.name === 'segment') {
		groupName = 'oneGroup';
	}

	return (
		<S.Chip>
			<S.Radio type="radio" id={props.value} value={props.value} name={groupName} />
			<label htmlFor={props.value}>{children}</label>
		</S.Chip>
	);
};

export default Chip;
