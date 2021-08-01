import styled from 'styled-components';
import { Container } from '../../../../css/common';

export const Section = styled(Container)`
	padding-top: 48px;
	padding-bottom: 48px;

	display: grid;
	grid-gap: 24px;
	grid-auto-flow: row;
	@media (min-width: 768px) {
		grid-auto-flow: column;
	}
`;

export const Channel = styled.div`
	padding-top: 56.25%;
	position: relative;
    
	border-radius: 10px;
	border: 3px solid rgba(249, 249, 249, 0.1);
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px;
	cursor: pointer;

	transition: 0.3s ease all;
	img {
		position: absolute;
		inset: 0;

		transition: 0.3s ease all;
	}

	video {
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0;

		opacity: 0;
		z-index: 1;
		transition: 0.3s ease all;
	}

	&:hover {
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
		video {
			opacity: 1;
			z-index: 1;
		}
	}
`;
