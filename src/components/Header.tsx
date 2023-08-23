import cartIcon from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import sneakersLogo from '../assets/images/logo.svg'
import { useCart } from '../hooks/useCart'

type HeaderProps = {
    productQuantity: number
}

export default function Header({ productQuantity }: HeaderProps){
    const { cartQuantity } = useCart() 
    
    return(
        <header className='p-6 flex w-full'>
            <img src={sneakersLogo} alt="logo de sneakers" width="138" height="20" className='self-center'/>
            <div className='ml-auto flex gap-4 relative'>
                <img src={cartIcon} alt="carrito de compras" width="22" height="20" />
                <div className='text-white bg-orange rounded-lg p-1 w-5 h-3.5 flex items-center justify-center text-xs absolute left-2.5 bottom-3.5'>
                    <span>{cartQuantity}</span>
                </div>
                <img src={avatar} alt="avatar" width="22" height="20"/>
            </div>
        </header>
    )
}