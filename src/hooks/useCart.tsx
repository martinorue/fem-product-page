import { useEffect, useState } from "react"

type CartItem = {
    id: number
    quantity: number
}
export function useCart(){
    const [cartItems, setCartItems] = useState<CartItem[]>([])
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

      const reducer = (quantity: number, item: CartItem) => {
        return item.quantity + quantity
    }
      const cartQuantity = cartItems.reduce(reducer, 0)

      return{
        getItemQuantity,
        addToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        productQuantity,
        cartQuantity
      }
    
}






