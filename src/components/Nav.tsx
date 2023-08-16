import iconMenu from '../assets/images/icon-menu.svg'

export default function Nav(){
    return(
        <nav>
            <button type="button" aria-controls="navigation-drawer" aria-expanded="false">
                <img alt="menu" src={iconMenu}/>
            </button>
        </nav>
    )
}