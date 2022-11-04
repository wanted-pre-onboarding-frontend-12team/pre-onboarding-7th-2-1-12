import styled from 'styled-components';

export const SkeletonContainer = styled.div`
	--elwidth: 97px;
	--elheight: 18px;
	list-style: none;

	.skeleton {
		background: #ddd;
	}
	.skelItemDiv {
		display: flex;
		flex-direction: row;
		width: 100%;
		padding: 1.2rem;
		border-bottom: 1px solid black;
		justify-content: space-between;
		height: 7.5rem;
		text-decoration: none;

		.skeletonInfoDiv {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			line-height: 1.05rem;

			.skeletonBrandDiv {
				display: flex;
				flex-direction: column;

				.skeleton.brand {
					width: var(--elwidth);
					height: var(--elheight);
					background-color: #ddd;
				}

				.skeleton.name {
					width: var(--elwidth);
					height: var(--elheight);
				}
			}

			.skeletonSegmentDiv {
				display: flex;
				flex-direction: column;

				.skeleton.segment {
					width: var(--elwidth);
					height: var(--elheight);
				}

				.skeleton.amount {
					width: var(--elwidth);
					height: var(--elheight);
				}
			}
		}
		.skeletonImgDiv {
			display: flex;
			position: relative;

			.skeleton.img {
				position: absolute;
				width: 152px;
				height: 80px;
				right: 0;
				z-index: -1;
			}

			.skeleton.newchip {
				display: flex;
				position: absolute;
				justify-content: center;
				align-items: center;
				right: 0;
				top: -0.5rem;
				width: 52px;
				height: 22px;
				border-radius: 42px;
				background-color: #808080;
			}
		}
	}
`;
