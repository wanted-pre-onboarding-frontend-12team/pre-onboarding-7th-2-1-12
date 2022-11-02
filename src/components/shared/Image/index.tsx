import { ImageItem } from './styled';

interface ImgType {
	imgUrl: string;
	isDetailImg: boolean;
}

export default function Image({ isDetailImg, imgUrl }: ImgType) {
	return <ImageItem isDetailImg={isDetailImg} imgUrl={imgUrl} />;
}
