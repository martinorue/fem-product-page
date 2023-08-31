import { ReactNode, createContext, useState, useEffect } from "react"
import { useCart } from "../hooks/useCart"

type CartContextProviderProps = {
    children: ReactNode
}

type CartContext = {
  getItemQuantity: (id: number) => number
  increaseItemQuantity: () => void
  decreaseItemQuantity: () => void
  handleOpenCart: () => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  addToCart: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  productQuantity: number
}

export const CartContext = createContext({} as CartContext)


export function CartContextProvider({ children }: CartContextProviderProps){
    const {
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
    } = useCart()

    return (
        <CartContext.Provider 
        value={{
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
        }}
        >
            {children}
        </CartContext.Provider>
  )
}