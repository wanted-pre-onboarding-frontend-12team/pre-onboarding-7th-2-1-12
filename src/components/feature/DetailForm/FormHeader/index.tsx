import { FormHead } from './styled';

type Props = {
	headerName: string;
};

const FormHeader = ({ headerName }: Props) => {
	return <FormHead className="header">{headerName}</FormHead>;
};
export default FormHeader;
