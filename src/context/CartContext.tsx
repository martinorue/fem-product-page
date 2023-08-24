import { ReactNode, createContext, useState, useEffect } from "react"

type CartItem = {
    id: number
    quantity: number
}

type CartContextProviderProps = {
    children: ReactNode
}

type CartContext = {
  getItemQuantity: (id: number) => number
  increaseItemQuantity: () => void
  decreaseItemQuantity: () => void
  handleOpenCart: () => void
  isOpen: boolean
  addToCart: (id: number) => void
//   removeFromCart: (id: number) => void
  cartQuantity: number
//   cartItems: CartItem[]
  productQuantity: number
  
}

export const CartContext = createContext({} as CartContext)


export function CartContextProvider({ children }: CartContextProviderProps){
    const storedCartItems = localStorage.getItem('cartItems')
    const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : []
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
    const [isOpen, setIsOpen] = useState(false)

    const [productQuantity, setProductQuantity] = useState(1)

    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id == id)?.quantity || 0
    }

    function addToCart(id: number){
        const item = cartItems.find(item => item.id === id)
    
        if(item){
            setCartItems(cartItems.map(item => item.id === id ? {...item, quantity: item.quantity + productQuantity} : item))
        } else {
            const newCartItem: CartItem = {
                id: id,
                quantity: productQuantity
            }
            setCartItems([...cartItems, newCartItem])
        }
    }
    
    const increaseItemQuantity = () => {
        const nextQuantity = productQuantity + 1
        setProductQuantity(nextQuantity)
    }
    
    const decreaseItemQuantity = () => {
        if(productQuantity === 1) return
        const nextQuantity = productQuantity - 1
        setProductQuantity(nextQuantity)
    }

    const handleOpenCart = () => {
        setIsOpen(!isOpen)
    }

    const reducer = (quantity: number, item: CartItem) => item.quantity + quantity
        
    const cartQuantity = cartItems.reduce(reducer, 0)

    return (
        <CartContext.Provider 
        value={{
            getItemQuantity,
            addToCart,
            increaseItemQuantity,
            decreaseItemQuantity,
            handleOpenCart,
            isOpen,
            productQuantity,
            cartQuantity    
        }}
        >
            {children}
        </CartContext.Provider>
  )
}