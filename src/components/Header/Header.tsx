import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	setSignoutState,
	setUserLoginDetail,
} from '../../features/user/user.slice';
import { auth, provider } from '../../firebase';
import * as S from './Header.styles';

const Header = () => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	const userName = useAppSelector((state) => state.user.displayName);
	const userPhoto = useAppSelector((state) => state.user.photoURL);
	const setUser = useCallback(
		({ displayName, email, photoURL }: any) => {
			dispatch(
				setUserLoginDetail({
					displayName,
					email,
					photoURL,
				})
			);
		},
		[dispatch]
	);
	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				setUser(user);
				history.push('/home');
			}
		});
	}, [userName, history, setUser]);
	const handleLogin = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => setUser(result.user))
			.catch((error) => alert(error.message));
	};
	const handleLogout = () => {
		auth
			.signOut()
			.then(() => {
				dispatch(setSignoutState());
				history.push('/');
			})
			.catch((error) => alert(error.message));
	};
	const NavMenu = (
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
	);
	return (
		<S.Header>
			<S.HContainer>
				<S.Logo src="/images/logo.svg" alt="Disney+" />
				{!userName ? (
					<S.Login onClick={handleLogin}>Login</S.Login>
				) : (
					<>
						{NavMenu}
						<S.SignOut>
							<S.UserImg src={userPhoto} alt={userName} />
							<S.DropDown>
								<span onClick={handleLogout}>Sign out</span>
							</S.DropDown>
						</S.SignOut>
					</>
				)}
			</S.HContainer>
		</S.Header>
	);
};

export default Header;
