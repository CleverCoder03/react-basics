import './App.css'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

function App() {
  return (
    <div className='py-20'>
      <div>
        <div className='flex justify-center'>
          <h1 className='text-white font-semibold text-4xl'>An Ecommerce Store</h1>
        </div>
        <div className='mt-15 lg:flex lg:justify-start'>
          {/* PRODUCT SECTION */}
          <div className='flex justify-center gap-5 flex-wrap'>
            {products.map(product => <ProductCard 
          key={product.id} product={product} />)}
          </div>
          {/* CART SECTION */}
          <div className='mt-15 lg:mt-0'>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
