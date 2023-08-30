import { useContext, useEffect, useState } from 'react'
import avatar from '../assets/images/image-avatar.png'
import sneakersLogo from '../assets/images/logo.svg'
import { CartContext } from '../context/CartContext'
import CartIcon from './CartIcon'
import Cart from './Cart'
import { Product } from '../../types'

type HeaderProps = {
    product: Product
}

export default function Header({product}: HeaderProps){
    const { cartQuantity, handleOpenCart, isOpen, getItemQuantity, removeFromCart, setIsOpen } = useContext(CartContext)

    return(
        <header className='p-6 flex w-full border-b-[1px] border-gray-200'>
            <img src={sneakersLogo} alt="logo de sneakers" width="138" height="20" className='self-center'/>
            <div className='ml-auto flex gap-8 relative h-6 md:h-10'>
                <button onClick={handleOpenCart}>
                    <CartIcon fillColor='fill-very-dark-blue' hoverColor='hover:fill-dark-grayish-blue transition-all duration-200'/>
                </button>
                {cartQuantity > 0 &&
                    <div className='text-white bg-orange rounded-lg p-1 w-5 h-3.5 flex items-center justify-center text-xs absolute left-2.5 -top-1 sm:top-1'>
                        <span>{cartQuantity}</span>
                    </div>
                }
                <img src={avatar} alt="avatar" width="22" height="20" className='w-auto'/>
            </div>
            {isOpen && <Cart product={product} cartQuantity={cartQuantity} getItemQuantity={getItemQuantity} removeFromCart={removeFromCart} setIsOpen={setIsOpen} />}
        </header>
    )
}