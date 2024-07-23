import PlaceCard from '../PlaceCard'
import Place from '../../models/Place'

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
          title={place.title}
          highlighted={place.highlighted}
          type={place.type}
          assessment={place.assessment}
          description={place.description}
          image={place.image}
          menu={place.menu}
        />
      ))}
    </S.List>
  </section>
)

export default ListPlace
