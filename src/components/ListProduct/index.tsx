import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ProductCard from '../ProductCard'

import close from '../../assets/images/close.png'

import * as S from './styles'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

type Product = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Props = {
  menu: Product[]
}

const ListProduct = ({ menu }: Props) => {
  const dispatch = useDispatch()

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const addToCart = () => {
    if (selectedProduct) {
      dispatch(add(selectedProduct))
      dispatch(open())
    }
  }

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
  }

  return (
    <>
      <section className="myContainer">
        <S.List>
          {menu.map((product) => (
            <ProductCard
              key={product.id}
              descricao={product.descricao}
              id={product.id}
              foto={product.foto}
              nome={product.nome}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </S.List>
      </section>
      {selectedProduct && (
        <S.Modal>
          <S.ModalContent>
            <S.CloseButton
              src={close}
              alt="Fechar"
              onClick={() => setSelectedProduct(null)}
            />
            <S.ModalImage
              src={selectedProduct.foto}
              alt={selectedProduct.nome}
            />
            <S.ModalInfos>
              <h4>{selectedProduct.nome}</h4>
              <p>
                {selectedProduct.descricao}
                <span>Porção: {selectedProduct.porcao}</span>
              </p>
              <S.AddCart type="button" onClick={addToCart}>
                Adicionar ao carrinho -{' '}
                <span>{parseToBrl(selectedProduct.preco)}</span>
              </S.AddCart>
            </S.ModalInfos>
          </S.ModalContent>
          <div
            className="overlay"
            onClick={() => setSelectedProduct(null)}
          ></div>
        </S.Modal>
      )}
    </>
  )
}

export default ListProduct
