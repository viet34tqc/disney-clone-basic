import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 12px 32px;
	height: 70px;

	position: sticky;
	top: 0;

	background: var(--c-dark);
`;

export const Logo = styled.img`
	width: 70px;
`;

export const Login = styled.button`
	padding: 4px 16px;
	border: 1px solid var(--c-text);
	border-radius: 5px;

	background: transparent;
	color: var(--c-text);
	letter-spacing: 1.5px;

	text-transform: uppercase;

	&:hover {
		background: var(--c-text);
		color: var(--c-black);
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	margin-right: auto;
	margin-left: 24px;

	a {
		display: flex;
		align-items: center;
		padding: 6px 12px;

		img {
			width: 20px;
		}

		span {
			margin-left: 5px;

			position: relative;

			color: var(--c-text);
			font-size: 14px;
			letter-spacing: 1.42px;

			&:before {
				content: '';
				background-color: var(--c-text);
				border-radius: 0px 0px 4px 4px;
				position: absolute;
				bottom: -6px;
				height: 2px;
				left: 0px;
				right: 0px;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				visibility: hidden;
				width: auto;
			}
		}
		&:hover {
			span:before {
				transform: scaleX(1);
				visibility: visible;
			}
		}
	}
`;

export const UserImg = styled.img`
	height: 100%;
	border-radius: 50%;
	width: 100%;
`;

export const DropDown = styled.div`
	position: absolute;
	top: 48px;
	right: 0px;
	background: rgb(19, 19, 19);
	border: 1px solid rgba(151, 151, 151, 0.34);
	border-radius: 4px;
	box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
	padding: 10px;
	font-size: 14px;
	letter-spacing: 3px;
	width: 100px;
	opacity: 0;
`;

export const SignOut = styled.div`
	position: relative;
	height: 48px;
	width: 48px;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;

	&:hover {
		${DropDown} {
			opacity: 1;
			transition-duration: 1s;
		}
	}
`;
