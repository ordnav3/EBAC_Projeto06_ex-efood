import { Place } from '../../pages/Home'
import PlaceCard from '../PlaceCard'

import * as S from './styles'

type Props = {
  places: Place[]
}

const ListPlace = ({ places }: Props) => (
  <section className="myContainer">
    <S.List>
      {places.map((place) => (
        <PlaceCard
          key={place.id}
          id={place.id}
          title={place.titulo}
          highlighted={place.destacado}
          type={place.tipo}
          assessment={place.avaliacao}
          description={place.descricao}
          image={place.capa}
        />
      ))}
    </S.List>
  </section>
)

export default ListPlace
