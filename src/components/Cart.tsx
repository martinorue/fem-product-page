import { Product } from "../../types"
import { formatPrice } from "../utils/formatPrice"
import IconDelete from "./IconDelete"

type CartProps = {
    cartQuantity: number
    getItemQuantity: (id: number) => number
    product: Product
}

export default function Cart({ product, cartQuantity, getItemQuantity }: CartProps){
    const { price } = product
    const itemQuantity = getItemQuantity(product.id)
    const total = price * itemQuantity

    return(
        <div className='w-full min-h-52 bg-white absolute top-20 z-10 divide-y
         divide-gray-200 max-w-[360px] left-1.5 rounded-lg'>
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
                        <span className="p-3">
                            <IconDelete />
                        </span>
                    </div>
                    <button className="w-full rounded-lg
                         bg-gradient-to-r from-orange to-amber-500
                    bg-orange text-light-grayish-blue text-sm p-3">Checkout</button>
                </div>
            }
        </div>
    )
}