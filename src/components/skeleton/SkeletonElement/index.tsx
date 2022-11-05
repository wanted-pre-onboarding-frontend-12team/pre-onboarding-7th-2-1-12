import { Shimmer } from './styled';

type Props = {
	type: string;
};

const SkeletonElement = ({ type }: Props) => {
	const classes = `skeleton ${type}`;
	return (
		<div className={classes}>
			<Shimmer />
		</div>
	);
};

export default SkeletonElement;
