import * as S from './styles'

import vector from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Header style={{ backgroundImage: `url(${vector})` }}>
      <S.HeaderContainer className="myContainer">
        <S.Links to={'/'}>Restaurantes</S.Links>
        <S.Logo to={'/'}>
          <img src={logo} alt="" />
        </S.Logo>
        <S.CartButton onClick={openCart}>
          {items.length} Produto(s) no carrinho{' '}
        </S.CartButton>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
