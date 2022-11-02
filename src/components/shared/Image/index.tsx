import { ImageItem } from './styled';

interface ImgType {
	imgUrl: string;
}

const Image = ({ imgUrl }: ImgType) => {
	return <ImageItem imgUrl={imgUrl} />;
};

export default Image;
