import * as S from './styles'

import vector from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <S.HeroContainer style={{ backgroundImage: `url(${vector})` }}>
    <div className="container">
      <S.Logo src={logo} />
      <S.HeroText>
        Viva experiências gastronômicas no conforto da sua casa
      </S.HeroText>
    </div>
  </S.HeroContainer>
)

export default Hero
