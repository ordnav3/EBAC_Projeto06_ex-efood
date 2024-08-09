import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ListProduct from '../../components/ListProduct'
import Presentation from '../../components/Presentation'

import { useGetProductsQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()

  const { data: place } = useGetProductsQuery(id!)

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
      <Cart />
    </div>
  )
}

export default Perfil
