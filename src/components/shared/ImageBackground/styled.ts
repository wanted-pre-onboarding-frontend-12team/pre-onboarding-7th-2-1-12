import styled from 'styled-components';

type Container = {
	imgUrl: string;
};

export const Container = styled.div<Container>`
	width: 100%;
	height: 100%;
	background-image: url(${({ imgUrl }) => imgUrl});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`;
