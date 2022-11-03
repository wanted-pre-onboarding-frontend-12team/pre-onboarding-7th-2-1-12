import styled from 'styled-components';

interface ImgType {
	imgUrl: string;
}

export const ImageItem = styled.div<ImgType>`
	width: 100%;
	height: 100%;
	background-image: url(${({ imgUrl }) => imgUrl});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`;
