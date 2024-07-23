import Product from '../../models/Product'
import ProductCard from '../ProductCard'

import * as S from './styles'

type Props = {
  products: Product[]
}

const ListProduct = ({ products }: Props) => (
  <section className="myContainer">
    <S.List>
      {products.map((product) => (
        <ProductCard
          description={product.description}
          id={product.id}
          image={product.image}
          name={product.name}
          key={product.id}
        />
      ))}
    </S.List>
  </section>
)

export default ListProduct
