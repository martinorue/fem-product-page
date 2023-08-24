import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CartContextProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
)
