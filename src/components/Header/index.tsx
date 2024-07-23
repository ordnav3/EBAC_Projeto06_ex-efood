import * as S from './styles'

import vector from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <S.Header style={{ backgroundImage: `url(${vector})` }}>
    <S.HeaderContainer className="myContainer">
      <S.Links to={'/'}>Restaurantes</S.Links>
      <S.Logo to={'/'}>
        <img src={logo} alt="" />
      </S.Logo>
      <S.Links to={'/carrinho'}>0 Produto(s) no carrinho </S.Links>
    </S.HeaderContainer>
  </S.Header>
)

export default Header
