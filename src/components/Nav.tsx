import { useState, useEffect } from 'react'
import iconMenu from '../assets/images/icon-menu.svg'


export default function Nav(){
    const [open, setOpen] = useState(false)

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    
      useEffect(() => {
        const handleWindowResize = () => {
          const nextWindowSize = [window.innerWidth, window.innerHeight];
          setWindowSize(nextWindowSize);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    
      const handleClickMenu = () => {
        const nextOpen = !open
        setOpen(nextOpen)
      }
    
    return(
        <nav className='flex shrink-0 gap-3 items-end'>
            <button onClick={handleClickMenu} type="button" aria-controls="navigation-drawer" aria-expanded="false" className='sm:hidden bg-transparent absolute z-20 left-3'>
                <img alt="menu" src={iconMenu} width="16" height="15"/>
            </button>
        <div className={`${open && 'absolute z-10 bg-white left-0 flex flex-col gap-5 top-0 pt-20 w-2/3'} transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            
            {(open || windowSize[0] > 640) &&
            <div> 
                <ul className={`${windowSize[0] > 640 ? 'flex' : ''}`}>
                    <li><a>Collections</a></li>
                    <li><a>Men</a></li>
                    <li><a>Women</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>}
        </div>
    </nav>
    
    )
}