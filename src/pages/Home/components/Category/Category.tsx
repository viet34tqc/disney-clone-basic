import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import * as S from './Category.styles';

interface CategoryProps {
	heading: string;
	category: 'recommend' | 'newDisney' | 'original' | 'trending';
}

const Category = ({ heading, category }: CategoryProps) => {
	const movies = useAppSelector((state) => state.movies[category]);
	return (
		<S.Section>
			<h4>{heading}</h4>
			<S.Content>
				{movies &&
					movies.map((movie) => (
						<S.Movie key={movie.id}>
							{movie.id}
							<Link to={`/detail/` + movie.id}>
								<img src={movie.cardImg} alt={movie.title} />
							</Link>
						</S.Movie>
					))}
			</S.Content>
		</S.Section>
	);
};

export default Category;
