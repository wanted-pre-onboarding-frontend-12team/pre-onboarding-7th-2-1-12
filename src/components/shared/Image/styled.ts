import styled from 'styled-components';

interface ImgType {
	isDetailImg: boolean;
	imgUrl: string;
}

export const ImageItem = styled.div<ImgType>`
	width: ${({ isDetailImg }) => (isDetailImg ? `100%` : `152px`)};
	height: ${({ isDetailImg }) => (isDetailImg ? `205px` : `80px`)};
	background-image: url(${({ imgUrl }) => imgUrl});
	background-position: center;
	background-size: cover;
`;
