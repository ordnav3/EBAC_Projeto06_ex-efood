import * as S from './styles'

type Props = {
  image: string
  category: string
  name: string
}

const Presentation = ({ category, image, name }: Props) => (
  <S.Presentation style={{ backgroundImage: `url(${image})` }}>
    <S.PresentationContainer className="myContainer">
      <S.Category>{category}</S.Category>
      <S.PlaceName>{name}</S.PlaceName>
    </S.PresentationContainer>
  </S.Presentation>
)

export default Presentation
