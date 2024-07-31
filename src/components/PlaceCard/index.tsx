import * as S from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  id: number
  title: string
  highlighted: boolean
  type: string
  assessment: number
  description: string
  image: string
}

const PlaceCard = ({
  id,
  title,
  highlighted,
  type,
  assessment,
  description,
  image
}: Props) => (
  <S.Card>
    <S.imageCard src={image} alt={title} />
    <S.InfosContainer>
      <S.Infos>
        {highlighted ? (
          <S.TagContainer>Destaques da Semana</S.TagContainer>
        ) : null}
        <S.TagContainer>{type}</S.TagContainer>
      </S.Infos>
      <S.TitleContainer>
        <h3>{title}</h3>
        <S.Nota>
          {assessment}
          <span>
            <img src={estrela} alt="estrela" />
          </span>
        </S.Nota>
      </S.TitleContainer>
      <S.TextContainer>{description}</S.TextContainer>
      <S.BunttonPlace to={`/perfil/${id}`}>Saiba mais</S.BunttonPlace>
    </S.InfosContainer>
  </S.Card>
)

export default PlaceCard
