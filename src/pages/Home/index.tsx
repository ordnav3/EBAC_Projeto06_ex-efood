import Hero from '../../components/Hero'
import ListPlace from '../../components/ListPlace'
import Place from '../../models/Place'

import ladolce from '../../assets/images/LaDolce.png'
import sushi from '../../assets/images/Sushi.png'

const restaurantes: Place[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    highlighted: true,
    type: 'Japonesa',
    assessment: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    menu: ['Japones']
  },
  {
    id: 2,
    title: 'Hioki Sushi ',
    highlighted: true,
    type: 'Italiana',
    assessment: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladolce,
    menu: ['Italiano']
  },
  {
    id: 3,
    title: 'Hioki Sushi ',
    highlighted: true,
    type: 'Italiana',
    assessment: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladolce,
    menu: ['Italiano']
  },
  {
    id: 4,
    title: 'Hioki Sushi ',
    highlighted: true,
    type: 'Italiana',
    assessment: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladolce,
    menu: ['Italiano']
  }
]

const Home = () => (
  <>
    <Hero />
    <ListPlace places={restaurantes} />
  </>
)

export default Home
