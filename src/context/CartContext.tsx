import { ReactNode, createContext } from "react";
import { useCart } from "../hooks/useCart";

type CartContextProviderProps = {
    children: ReactNode
}

type CartContext = {
    productQuantity: number
}

export const CartContext = createContext({} as CartContext)


export function CartContextProvider({ children }: CartContextProviderProps){
    const { productQuantity } = useCart()

    return (
        <CartContext.Provider value={{productQuantity}}>
            {children}
        </CartContext.Provider>
  )
}