import Nav from './components/Nav'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <div className="h-screen m-4">
      <div className='p-4 flex gap-2.5 w-full justify-between items-baseline'>
        <Nav></Nav>
        <Header></Header>
      </div>
    </div>
  )
}

export default App
