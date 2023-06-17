import Form from './Form'
import ProductItem from './ProductItem'
import { useState } from 'react'

const ProductList = () => {
  const [productCount, setProductCount] = useState(3)
  const [products, setProducts] = useState([
    {
      name: 'Uno',
      description: 'Uno',
      price: 34
    },
    {
      name: 'Dos',
      description: 'Dos',
      price: 354
    },
    {
      name: 'Tres',
      description: 'Tres',
      price: 12
    }
  ])

  const addProduct = (product) => {
    setProducts([...products, product])
    setProductCount(productCount + 1)
  }

  return (
    <>
      <h1>Mi lista de productos ({productCount} Productos)</h1>
      {/*<button onClick={() => setProductCount(productCount + 1)}>+</button>*/}
      <Form onSubmit={addProduct}/>
      <ul className='flex gap-4'>
        {products.map((product) => (
          <li>
            <ProductItem product={product}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductList
