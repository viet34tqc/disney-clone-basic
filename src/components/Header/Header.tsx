import * as S from './Header.styles';

const Header = () => {
	return (
		<S.Header>
			<S.Logo src="/images/logo.svg" alt="Disney+" />
            <S.Login>Login</S.Login>
		</S.Header>
	);
};

export default Header;
