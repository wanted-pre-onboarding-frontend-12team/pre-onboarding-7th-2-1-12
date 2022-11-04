import * as S from './styled';

interface ImgType {
	imgUrl: string;
}

const Image = ({ imgUrl }: ImgType) => {
	return <S.ImageItem imgUrl={imgUrl} />;
};

export default Image;
