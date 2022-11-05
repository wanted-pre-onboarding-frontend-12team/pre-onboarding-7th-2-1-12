import SkeletonElement from '../../SkeletonElement';
import { SkeletonContainer } from './styled';

const SkeletonCarListItem = () => {
	return (
		<SkeletonContainer>
			<div className="skelItemDiv">
				<div className="skeletonInfoDiv">
					<div className="skeletonBrandDiv">
						<SkeletonElement type="brand" />
						<SkeletonElement type="name" />
					</div>
					<div className="skeletonSegmentDiv">
						<SkeletonElement type="segment" />
						<SkeletonElement type="amount" />
					</div>
				</div>
				<div className="skeletonImgDiv">
					<SkeletonElement type="img" />
					<SkeletonElement type="newchip" />
				</div>
			</div>
		</SkeletonContainer>
	);
};

export default SkeletonCarListItem;
