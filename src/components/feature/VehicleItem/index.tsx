import { Link, useParams } from 'react-router-dom';

import * as S from './styled';

export default function VehicleItem() {
	const { id } = useParams();
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
					<img src="https://post-phinf.pstatic.net/MjAyMDEyMTlfMzAw/MDAxNjA4MzQ4NTE4NTM3.rM6xPRUuGAt5fdE-LkBxFPWXgQRcWX7XqWyKqztxhD0g.vz7rdXmcG7MQHYmMiYCFAT_lynG7S56RJSA5o2lVAc4g.JPEG/%28%EC%82%AC%EC%A7%84%EC%9E%90%EB%A3%8C_1%29_%ED%98%84%EB%8C%80%EC%9E%90%EB%8F%99%EC%B0%A8%2C_%EA%B5%AD%EB%82%B4_%EC%B5%9C%EC%B4%88_%EC%A0%84%EA%B8%B0%EC%B0%A8_%EC%A4%91%EA%B3%A0%EC%B0%A8_%EA%B0%80%EA%B2%A9_%EB%B3%B4%EC%9E%A5_%ED%94%84%EB%A1%9C.jpg?type=w1200" />
					<p>신규</p>
				</S.Img>
			</S.Container>
		</Link>
	);
}
