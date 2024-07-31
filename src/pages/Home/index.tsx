import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import ListPlace from '../../components/ListPlace'

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
  const [places, setPlaces] = useState<Place[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPlaces(res))
  })

  return (
    <>
      <Hero />
      <ListPlace places={places} />
    </>
  )
}

export default Home
