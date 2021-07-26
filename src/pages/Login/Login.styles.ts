import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px;

	position: relative;

	color: var(--c-text);

	text-align: center;

	overflow: hidden;
	height: 100vh;
`;

export const CTA = styled.div`
	width: 650px;
	max-width: 100%;
`;

export const CTALogo1 = styled.img`
	margin-bottom: 12px;
`;

export const CTAText = styled.p`
	margin-bottom: 24px;

	font-size: 11px;
	letter-spacing: 1.5px;
`;

export const CTALogo2 = styled.img``;

export const BGImg = styled.div`
	height: 100%;

	position: absolute;
	inset: 0;

	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url('/images/login-background.jpg');

	z-index: -1;
`;
