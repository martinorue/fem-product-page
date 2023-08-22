import Nav from './components/Nav'
import Header from './components/Header'
import './App.css'
import Carousel from './components/Carousel'
import { products } from '../data'
import ProductInfo from './components/ProductInfo'


function App() {

  return (
    <div className="h-screen">
      <div className='flex gap-4 w-full justify-between items-baseline'>
        <Nav></Nav>
        <Header></Header>
      </div>
      <div className='max-w-lg'>
        <Carousel products={products} />
      </div>
      <ProductInfo product={products[0]}/>
    </div>
  )
}

export default App
