import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setMovies } from '../../features/movies/movies.slice';
import db from '../../firebase';
import Category from './components/Category/Category';
import Channels from './components/Channels/Channels';
import Slider from './components/Slider/Slider';
import * as S from './Home.styles';

const Home = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		let recommend: any[] = [];
		let newDisney: any[] = [];
		let original: any[] = [];
		let trending: any[] = [];
		db.collection('movies').onSnapshot((snapshot) => {
			snapshot.docs.forEach((doc) => {
				switch (doc.data().type) {
					case 'recommend':
						recommend = [...recommend, { id: doc.id, ...doc.data() }];
						break;

					case 'new':
						newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
						break;

					case 'original':
						original = [...original, { id: doc.id, ...doc.data() }];
						break;

					case 'trending':
						trending = [...trending, { id: doc.id, ...doc.data() }];
						break;
				}
			});
			dispatch(
				setMovies({
					recommend,
					newDisney,
					original,
					trending,
				})
			);
		});
	}, [dispatch]);

	return (
		<S.Container>
			<Slider />
			<Channels />
			<Category heading="Recommended for You" category="recommend" />
			<Category heading="New to Disney+" category="newDisney" />
			<Category heading="Originals" category="original" />
			<Category heading="Trending" category="trending" />
		</S.Container>
	);
};

export default Home;
