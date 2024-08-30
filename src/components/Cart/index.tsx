import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Checkout from '../Checkout'
import { parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [payment, setPayment] = useState(false)

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
        {!payment && items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBrl(item.preco)}</span>
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
              <p>{parseToBrl(getTotalPrice())}</p>
            </S.TotalPrice>
            <S.CartButton type="button" onClick={() => setPayment(true)}>
              Continuar com a entrega
            </S.CartButton>
          </>
        ) : (
          items.length === 0 && (
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
          )
        )}
        {payment && <Checkout setPayment={setPayment} />}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
