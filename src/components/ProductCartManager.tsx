import CartIcon from "./CartIcon"
import { Product } from "../../types"
import { useContext } from "react";
import { CartContext } from '../context/CartContext'

type ProductCartManagerProps = {
  product: Product;
};

export default function ProductCartManager({product}: ProductCartManagerProps) {
  
  const { 
    decreaseItemQuantity, 
    increaseItemQuantity, 
    productQuantity, 
    addToCart 
  } = useContext(CartContext)

  return (
    <div className="flex flex-col gap-4">
        <div className='flex gap-4 w-full justify-between items-baseline px-5'>
            <button onClick={decreaseItemQuantity}><span className={`${productQuantity === 1 ? 'text-grayish-blue' : 'text-orange'} text-2xl font-bold`}>-</span></button>
            <span className="font-semibold text-very-dark-blue">{productQuantity}</span>
            <button onClick={increaseItemQuantity}><span className="text-orange text-2xl font-bold">+</span></button>
        </div>
        <button
          onClick={() => addToCart(product.id)} 
          className="w-full flex justify-center gap-3 bg-orange 
          text-light-grayish-blue p-4 rounded-xl" >
            <CartIcon 
              fillColor="fill-light-grayish-blue" 
              hoverColor=""/>Add to cart
        </button>
    </div>
  )
}
