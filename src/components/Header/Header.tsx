import * as S from './Header.styles';

const Header = () => {
	return (
		<S.Header>
			<S.Logo src="/images/logo.svg" alt="Disney+" />
			<S.Nav>
				<a href="/home">
					<img src="/images/home-icon.svg" alt="HOME" />
					<span>HOME</span>
				</a>
				<a href="/">
					<img src="/images/search-icon.svg" alt="SEARCH" />
					<span>SEARCH</span>
				</a>
				<a href="/">
					<img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
					<span>WATCHLIST</span>
				</a>
				<a href="/">
					<img src="/images/original-icon.svg" alt="ORIGINALS" />
					<span>ORIGINALS</span>
				</a>
				<a href="/">
					<img src="/images/movie-icon.svg" alt="MOVIES" />
					<span>MOVIES</span>
				</a>
				<a href="/">
					<img src="/images/series-icon.svg" alt="SERIES" />
					<span>SERIES</span>
				</a>
			</S.Nav>
			<S.Login>Login</S.Login>
		</S.Header>
	);
};

export default Header;
