import Nav from './components/Nav'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className='p-4 flex gap-3 items-center'>
        <Nav></Nav>
        <Header></Header>
      </div>
    </div>
  )
}

export default App
