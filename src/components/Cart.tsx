import { Product } from "../../types"
import { formatPrice } from "../utils/formatPrice"
import IconDelete from "./IconDelete"
import { useClickOutside } from "../hooks/useClickOutside"

type CartProps = {
    cartQuantity: number
    getItemQuantity: (id: number) => number
    product: Product
    removeFromCart: (id: number) => void
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Cart({ product, cartQuantity, getItemQuantity, removeFromCart, setIsOpen }: CartProps){
    const { price } = product
    const itemQuantity = getItemQuantity(product.id)
    const total = price * itemQuantity
    const cartRef = useClickOutside(() => setIsOpen(false));
    
    return(
        <div ref={cartRef} className='w-full min-h-52 translate-x-[-12%] translate-y-[28%] bg-white absolute  z-10 divide-y
         divide-gray-200 max-w-[325px] sm:right-12 rounded-lg shadow-2xl'>
            <div className="font-semibold p-4">Cart</div>
            {cartQuantity === 0 ?
                <div className="flex items-center justify-center h-[calc(13rem-56px)]">
                    Your cart is empty.
                </div>
                :
                <div className="p-4 flex flex-col gap-6">
                    <div className="flex items-center justify-evenly text-dark-grayish-blue">
                        <img src={product.thumbnails[0].src} alt="" width={45} height={45} className="rounded-sm"/>
                        <div>
                            <p>{product.title}</p>
                            <p>${formatPrice(price)} x {itemQuantity} <span className="text-very-dark-blue font-bold">${formatPrice(total)}</span></p>
                        </div>
                        <button onClick={(e) => removeFromCart(product.id)}>
                            <IconDelete />
                        </button>
                    </div>
                    <button className="w-full rounded-lg
                         bg-gradient-to-r from-orange to-amber-500
                    bg-orange text-light-grayish-blue text-sm p-3">Checkout</button>
                </div>
            }
        </div>
    )
}