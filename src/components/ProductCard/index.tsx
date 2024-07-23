import * as S from './styles'

type Props = {
  image: string
  id: number
  name: string
  description: string
}

const ProductCard = ({ image, id, name, description }: Props) => (
  <S.CardContainer key={id}>
    <img src={image} alt={name} />
    <S.Title>{name}</S.Title>
    <S.Text>{description}</S.Text>
    <S.Button>Adicionar ao carrinho</S.Button>
  </S.CardContainer>
)

export default ProductCard
