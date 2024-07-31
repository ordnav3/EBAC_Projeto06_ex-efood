import React from 'react'
import * as S from './styles'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  onClick: () => void
}

const ProductCard: React.FC<Props> = ({
  id,
  nome,
  descricao,
  foto,
  onClick
}) => (
  <S.CardContainer key={id} onClick={onClick}>
    <img src={foto} alt={nome} />
    <S.Title>{nome}</S.Title>
    <S.Text>{descricao}</S.Text>
    <S.Button>Adicionar ao carrinho</S.Button>
  </S.CardContainer>
)

export default ProductCard
