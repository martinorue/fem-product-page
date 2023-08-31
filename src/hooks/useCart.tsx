import { useEffect, useState } from "react"

type CartItem = {
    id: number
    quantity: number
}
export function useCart(){
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

    const removeFromCart = (id: number) => {
        const items = cartItems.filter(item => item.id !== id)
        setCartItems([...items])
    }

      return{
        getItemQuantity,
            addToCart,
            increaseItemQuantity,
            decreaseItemQuantity,
            handleOpenCart,
            isOpen,
            setIsOpen,
            productQuantity,
            cartQuantity,
            removeFromCart 
      }
    
}






