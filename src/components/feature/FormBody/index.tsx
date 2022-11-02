import { FormBodyWrap } from './styled';

type Props = {
	name: string;
	description: string;
};

const FormBody = ({ name, description }: Props) => {
	return (
		<FormBodyWrap className="body">
			<span className="bold">{name}</span>
			<span>{description}</span>
		</FormBodyWrap>
	);
};

export default FormBody;
