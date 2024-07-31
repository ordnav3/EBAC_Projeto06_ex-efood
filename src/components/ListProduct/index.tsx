import { useState } from 'react'
import ProductCard from '../ProductCard'

import close from '../../assets/images/close.png'

import * as S from './styles'

type Props = {
  menu: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }[]
}

const ListProduct = ({ menu }: Props) => {
  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const [selectedProduct, setSelectedProduct] = useState<null | {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }>(null)

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  const handleProductClick = (product: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }) => {
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
              alt=""
              onClick={() => setSelectedProduct(null)}
            />
            <S.ModalImage src={selectedProduct.foto} alt="" />
            <S.ModalInfos>
              <h4>{selectedProduct.nome}</h4>
              <p>
                {selectedProduct.descricao}
                <span>Porção: {selectedProduct.porcao}</span>
              </p>
              <S.AddCart>
                Adicionar ao carrinho -{' '}
                <span>{formataPreco(selectedProduct.preco)}</span>
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
