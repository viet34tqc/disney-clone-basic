import * as S from './Channels.styles';

const channels = [
	{
		img: '/images/viewers-disney.png',
		video: '/videos/1564674844-disney.mp4',
	},
	{
		img: '/images/viewers-pixar.png',
		video: '/videos/1564676714-pixar.mp4',
	},
	{
		img: '/images/viewers-marvel.png',
		video: '/videos/1564676115-marvel.mp4',
	},
	{
		img: '/images/viewers-starwars.png',
		video: '/videos/1608229455-star-wars.mp4',
	},
	{
		img: '/images/viewers-national.png',
		video: '/videos/1564676296-national-geographic.mp4',
	},
];
const Channels = () => {
	return (
		<S.Section>
			{channels.map(({ img, video }, index) => (
				<S.Channel key={index}>
					<img src={img} alt="" />
					<video autoPlay={true} loop={true} playsInline={true}>
						<source src={video} type="video/mp4" />
					</video>
				</S.Channel>
			))}
		</S.Section>
	);
};

export default Channels;
