import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 12px 32px;

	position: fixed;
	top: 0;
	right: 0;
	left: 0;

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
