import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styled';
import BackArrowIcon from '@src/assets/images/back_arrow.svg';

const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	if (window.location.pathname === '/*') return null;
	return (
		<S.HeaderContainer>
			{location.pathname === '/' ? (
				<S.Header>전체차량</S.Header>
			) : (
				<S.Header>
					<img src={BackArrowIcon} onClick={() => navigate(-1)} className="arrow" />
					<p>차량상세</p>
				</S.Header>
			)}
		</S.HeaderContainer>
	);
};

export default Header;
