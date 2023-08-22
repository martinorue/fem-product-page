import Nav from './components/Nav'
import Header from './components/Header'
import './App.css'
import Carousel from './components/Carousel'
import { products } from '../data'
import ProductInfo from './components/ProductInfo'
import ProductCart from './components/ProductCart'


function App() {

  return (
      <div className="h-screen">
        <div className='flex gap-4 w-full justify-between items-baseline'>
          <Nav />
          <Header />
        </div>
        <div className='max-w-lg'>
          <Carousel products={products} />
        </div>
        <div className='flex flex-col gap-4 p-4'>
          <ProductInfo product={products[0]} />
          <ProductCart product={products[0]} />
        </div>
      </div>
  )
}

export default App
