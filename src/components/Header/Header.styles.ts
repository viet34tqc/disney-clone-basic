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
