import Nav from './components/Nav'
import Header from './components/Header'
import './App.css'
import Carousel from './components/Carousel'
import { products } from '../data'


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
      <p className='text-orange'>sneaker company</p>
    </div>
  )
}

export default App
