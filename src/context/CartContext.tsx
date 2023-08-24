import { ReactNode, createContext } from "react";
import { useCart } from "../hooks/useCart";

type CartContextProviderProps = {
    children: ReactNode
}

type CartContext = {
    cartQuantity: number
}

export const CartContext = createContext({} as CartContext)


export function CartContextProvider({ children }: CartContextProviderProps){
    const { cartQuantity } = useCart()

    return (
        <CartContext.Provider value={{cartQuantity}}>
            {children}
        </CartContext.Provider>
  )
}