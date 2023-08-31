import Nav from './components/Nav'
import Header from './components/Header'
import './App.css'
import Carousel from './components/Carousel'
import { products } from '../data'
import ProductInfo from './components/ProductInfo'
import ProductCartManager from './components/ProductCartManager'

function App() {
  
  return (
      <div className="h-screen mx-auto my-0 max-w-6xl">
        <div className='flex relative gap-4 w-full justify-between items-center'>
          <Nav />
          <Header product={products[0]} />
        </div>
        <div className='sm:flex items-center md:pt-8 gap-4 justify-center'>
          <div className='max-w-sm mx-auto'>
            <Carousel product={products[0]} />
          </div>
          <div className='flex flex-col p-4 md:pl-12 md:pr-12 max-w-lg gap-10 mx-auto'>
            <ProductInfo product={products[0]} />
            <ProductCartManager product={products[0]} />
          </div>
        </div>
      </div>
  )
}

export default App