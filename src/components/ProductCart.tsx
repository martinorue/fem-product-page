import { useState } from "react"
import CartIcon from "./CartIcon"


export default function ProductCart() {
  const [productQuantity, setProductQuantity] = useState(0)

  const increaseQuantity = () => {
    const nextQuantity = productQuantity + 1
    setProductQuantity(nextQuantity)
  }

  const decreaseQuantity = () => {
    if(productQuantity === 0) return
    const nextQuantity = productQuantity - 1
    setProductQuantity(nextQuantity)
  }

  return (
    <div className="flex flex-col gap-4">
        <div className='flex gap-4 w-full justify-between items-baseline px-5'>
            <button onClick={decreaseQuantity}><span className="text-orange text-2xl font-bold">-</span></button>
            <span className="font-semibold text-very-dark-blue">{productQuantity}</span>
            <button onClick={increaseQuantity}><span className="text-orange text-2xl font-bold">+</span></button>
        </div>
        <button className="w-full flex justify-center gap-3 bg-orange text-light-grayish-blue p-4 rounded-xl">
            <CartIcon />Add to cart
        </button>
    </div>
  )
}
