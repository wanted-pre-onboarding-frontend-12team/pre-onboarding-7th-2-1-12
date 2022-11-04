import React, { PropsWithChildren, Dispatch, SetStateAction } from 'react';
import * as S from './styled';
import { Chip as ChipType } from '@src/recoil/atoms/ChipAtom';

type Props = {
	value: string;
	name: string;
	setState: Dispatch<SetStateAction<ChipType>>;
	state: ChipType;
} & PropsWithChildren;

const Chip = ({ children, ...props }: Props) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.setState({ value: e.target.value, name: e.target.name, type: e.target.type });
	};

	return (
		<>
			<S.Chip>
				<S.Radio
					type="radio"
					id={props.value}
					value={props.value}
					name={props.name}
					onChange={handleChange}
					checked={props.state.value === props.value}
				/>
				<label htmlFor={props.value}>{children}</label>
			</S.Chip>
		</>
	);
};

export default Chip;
