import cartIcon from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import sneakersLogo from '../assets/images/logo.svg'


export default function Header(){
    return(
        <header className='p-6 flex w-full'>
            <img src={sneakersLogo} alt="logo de sneakers" width="138" height="20" className='self-center'/>
            <div className='ml-auto flex gap-4'>
                <img src={cartIcon} alt="carrito de compras" width="22" height="20" />
                <img src={avatar} alt="avatar" width="22" height="20"/>
            </div>
        </header>
    )
}