import * as S from './styled';

type Props = {
	imgUrl: string;
};

const ImageBackground = ({ imgUrl }: Props) => {
	return <S.Container imgUrl={imgUrl} />;
};

export default ImageBackground;
