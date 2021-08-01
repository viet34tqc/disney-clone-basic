import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import * as S from './Slider.styles';

const Slider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
	};
	return (
		<S.Carousel {...settings}>
			<img src="/images/slider-badging.jpg" alt="" />
			<img src="/images/slider-scale.jpg" alt="" />
			<img src="/images/slider-badag.jpg" alt="" />
			<img src="/images/slider-scales.jpg" alt="" />
		</S.Carousel>
	);
};

export default Slider;
