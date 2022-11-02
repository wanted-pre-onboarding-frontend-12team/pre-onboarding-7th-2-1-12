import * as S from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import back_icon from '../../../assets/images/back_icon.svg';

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
					<img src={back_icon} onClick={() => navigate(-1)} className="arrow" />
					<p>차량상세</p>
				</S.Header>
			)}
		</S.HeaderContainer>
	);
};

export default Header;
