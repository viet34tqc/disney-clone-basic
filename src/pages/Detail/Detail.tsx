import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../css/common';
import db from '../../firebase';
import * as S from './Detail.styles';

const Detail = () => {
	const { id } = useParams<{ id: string }>();
	const [data, setData] = useState<any>({});
	// Get the movie via Firestore
	useEffect(() => {
		db.collection('movies')
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					setData(doc.data());
				} else {
					console.log('There is no such document in the database');
				}
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, [id]);

	return (
		<S.Container background={data.backgroundImg}>
			<Container>
				<S.ImgTitle alt={data.title} src={data.titleImg} />
				<S.Content>
					<S.Controls>
						<S.Player>
							<img src="/images/play-icon-black.png" alt="" />
							<span>Play</span>
						</S.Player>
						<S.Trailer>
							<img src="/images/play-icon-white.png" alt="" />
							<span>Trailer</span>
						</S.Trailer>
						<S.AddList>
							<span />
							<span />
						</S.AddList>
						<S.ImgGroup>
							<img src="/images/group-icon.png" alt="" />
						</S.ImgGroup>
					</S.Controls>
					<S.SubTitle>{data.subTitle}</S.SubTitle>
					<S.Description>{data.description}</S.Description>
				</S.Content>
			</Container>
		</S.Container>
	);
};

export default Detail;
