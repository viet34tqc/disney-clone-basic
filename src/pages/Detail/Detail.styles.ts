import styled from 'styled-components';

type ContainerType = {
	background?: string;
};

export const Container = styled.div<ContainerType>`
	background: url(${(props) => (props.background ? props.background : '')})
		no-repeat center/cover;
	min-height: calc(100vh - 70px);
	padding: 64px 0;
`;

export const ImgTitle = styled.img`
	display: block;
	max-width: 600px;
	width: 35%;
	margin-bottom: 32px;
`;

export const Content = styled.div``;

export const Controls = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 24px;
	margin-bottom: 24px;
`;

export const Player = styled.button`
	font-size: 15px;
	padding: 8px 24px;
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 1.8px;
	text-align: center;
	text-transform: uppercase;
	background: rgb (249, 249, 249);
	border: none;
	color: rgb(0, 0, 0);
`;

export const Trailer = styled(Player)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`;

export const AddList = styled.div`
	height: 44px;
	width: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 50%;
	border: 2px solid white;
	cursor: pointer;
	span {
		background-color: rgb(249, 249, 249);
		&:first-child {
			height: 2px;
			transform: translate(1px, 0px) rotate(0deg);
			width: 16px;
		}
		&:nth-child(2) {
			height: 16px;
			transform: translateX(-8px) rotate(0deg);
			width: 2px;
		}
	}
`;

export const ImgGroup = styled(AddList)``;

export const SubTitle = styled.div`
	font-size: 14px;
	margin-bottom: 24px;
`;

export const Description = styled.div`
	font-size: 18px;
`;
