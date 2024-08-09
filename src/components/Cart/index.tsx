import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ListProduct'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
                aria-label="Remover item do carrinho"
              />
            </S.CartItem>
          ))}
        </ul>
        <S.TotalPrice>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </S.TotalPrice>
        <S.CartButton type="button">Continuar com a entrega</S.CartButton>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
