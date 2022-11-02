import * as S from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<S.HeaderContainer>
			{location.pathname === '/' ? (
				<S.Header>전체차량</S.Header>
			) : (
				<S.Header>
					<AiOutlineArrowLeft className="arrow" onClick={() => navigate(-1)} />
					<p>차량상세</p>
				</S.Header>
			)}
		</S.HeaderContainer>
	);
};

export default Header;
