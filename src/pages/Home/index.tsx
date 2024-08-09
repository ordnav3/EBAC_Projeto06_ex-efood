import Hero from '../../components/Hero'
import ListPlace from '../../components/ListPlace'
import { useGetPlacesQuery } from '../../services/api'

export type Product = {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
}

export type Place = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Product[]
}

const Home = () => {
  const { data: places } = useGetPlacesQuery()

  if (places) {
    return (
      <>
        <Hero />
        <ListPlace places={places} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
