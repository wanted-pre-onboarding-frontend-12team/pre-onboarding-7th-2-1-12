import { ImageItem } from './styled';

export default function Image({}) {
	const isDetailImg: boolean = true;
	const imgUrl: string = `https://blog.kakaocdn.net/dn/cFpDPS/btrmhg2fPGD/bNvrWQKWTuLzDmA0PcID8k/img.png`;
	return <ImageItem isDetailImg={isDetailImg} imgUrl={imgUrl} />;
}
