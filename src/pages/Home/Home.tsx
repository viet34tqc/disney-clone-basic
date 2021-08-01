import Channels from './components/Channels/Channels'
import Slider from './components/Slider/Slider'
import * as S from './Home.styles'

const Home = () => {
    return (
        <S.Container>
            <Slider />
            <Channels />
        </S.Container>
    )
}

export default Home
