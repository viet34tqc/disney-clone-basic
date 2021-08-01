import Slider from 'react-slick';
import styled from 'styled-components';

export const Carousel = styled(Slider)`
	.slick-arrow {
		opacity: 0;
		height: 100%;
		width: 5vw;
		z-index: 1;
		transition: opacity 0.2s ease 0s;
	}

	&:hover .slick-arrow {
		opacity: 1;
	}

	.slick-dots {
		li {
			button:before {
				font-size: 10px;
				color: rgb(150, 158, 171);
			}
			&.slick-active button:before {
				color: white;
			}
		}
	}

	.slick-prev {
		left: 0;
	}

	.slick-next {
		right: 0;
	}
`;

export const Wrap = styled.div``;
