import styled from 'styled-components';

export const Shimmer = styled.div`
	width: 50%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.2);
	box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
	animation: loading 2s infinite;
	@keyframes loading {
		0% {
			transform: translateX(-150%);
		}
		50% {
			transform: translateX(-60%);
		}
		100% {
			transform: translate(150%);
		}
	}
`;
