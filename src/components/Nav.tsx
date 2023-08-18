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
        <div className='flex shrink-0 gap-3 items-end'>
            <button onClick={handleClickMenu} 
                type="button" 
                aria-controls="navigation-drawer" 
                aria-expanded="false" 
                className='sm:hidden bg-transparent absolute z-20 left-3'>
                <img alt="menu" src={iconMenu} width="16" height="15"/>
            </button>
        <div>
            <div className={`absolute opacity-0 top-0 p-6 w-2/3 transition duration-300 ease-in-out bg-white ${open ? 'z-10  translate-x-0 opacity-100' : '-translate-x-full'}`}> 
                <nav>
                    <ul className={`${windowSize[0] > 640 ? 'flex' : ''}`}>
                        <li><a>Collections</a></li>
                        <li><a>Men</a></li>
                        <li><a>Women</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    
    )
}