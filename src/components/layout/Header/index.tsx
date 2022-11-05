import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import ROUTE_PATH from '@src/router/routePath';
import BackArrowIcon from '@src/assets/images/back_arrow.svg';

const Header = () => {
	const navigator = useNavigate();

	return (
		<S.HeaderContainer>
			<S.Header>{window.location.pathname === ROUTE_PATH.CAR_LIST ? '전체차량' : '차량상세'}</S.Header>

			{window.location.pathname !== ROUTE_PATH.CAR_LIST && (
				<S.BackArrowNavitationButton type="button" onClick={() => navigator(-1)}>
					<img src={BackArrowIcon} alt="" />
				</S.BackArrowNavitationButton>
			)}
		</S.HeaderContainer>
	);
};

export default Header;
