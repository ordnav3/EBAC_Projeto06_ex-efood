import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ListProduct from '../../components/ListProduct'
import Presentation from '../../components/Presentation'

import { Place } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [place, setPlace] = useState<Place>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPlace(res))
  }, [id])

  if (!place) {
    return <h3>Carregando...</h3>
  }

  return (
    <div>
      <Header />
      <Presentation
        category={place.tipo}
        image={place.capa}
        name={place.titulo}
      />
      <ListProduct menu={place.cardapio} />
    </div>
  )
}

export default Perfil
