import { Link, useParams } from 'react-router-dom';
import Image from '../../shared/Image';
import * as S from './styled';

const VehicleItem = () => {
	const { id } = useParams();
	const imgUrl: string = `https://blog.kakaocdn.net/dn/cFpDPS/btrmhg2fPGD/bNvrWQKWTuLzDmA0PcID8k/img.png`;
	return (
		<Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
			<S.Container>
				<S.Information>
					<S.Brand>
						<span>기아</span>
						<span>EV6</span>
					</S.Brand>
					<S.Segment>
						<span>중형 / 전기</span>
						<span>월 600,000 원 부터</span>
					</S.Segment>
				</S.Information>
				<S.Img>
					<Image imgUrl={imgUrl} />
					<p>신규</p>
				</S.Img>
			</S.Container>
		</Link>
	);
};

export default VehicleItem;
