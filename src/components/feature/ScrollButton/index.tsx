import { useEffect, useState } from 'react';
import { ScrollBtn } from './styled';

type Props = {
	scrollRef: React.RefObject<HTMLUListElement>;
};

const ScrollButton = ({ scrollRef }: Props) => {
	const [BtnStatus, setBtnStatus] = useState(false);

	const handleTop = () => {
		scrollRef.current?.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setBtnStatus(false);
	};

	const handleFollow = () => {
		if (!scrollRef.current) return;

		if (scrollRef.current) {
			if (scrollRef.current?.scrollTop > scrollRef.current?.offsetHeight) {
				setBtnStatus(true);
			} else {
				setBtnStatus(false);
			}
		}
	};

	useEffect(() => {
		if (!scrollRef.current) return;

		scrollRef.current.addEventListener('scroll', handleFollow);

		return () => {
			if (!scrollRef.current) return;
			scrollRef.current.removeEventListener('scroll', handleFollow);
		};
	}, []);

	return (
		<ScrollBtn show={BtnStatus} onClick={handleTop}>
			Top
		</ScrollBtn>
	);
};

export default ScrollButton;
