import { useState, useEffect } from 'react'


export default function Nav(){
    const [open, setOpen] = useState(false)
    const genericHamburgerLine = `h-0.5 w-4 my-0.5 bg-black transition ease transform duration-300`;

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
        <button
          className="flex flex-col h-12 w-12 justify-center items-center group sm:hidden bg-transparent absolute z-30 -left-1 top-3"
          onClick={handleClickMenu} 
        >
          <div
            className={`${genericHamburgerLine} ${
              open
                ? "rotate-45 translate-y-1 opacity-60 group-hover:opacity-100 "
                : "opacity-60 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              open ? "opacity-0" : "opacity-60 group-hover:opacity-100 "
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
             open
                ? "-rotate-45 -translate-y-2 opacity-60 group-hover:opacity-100 "
                : "opacity-60 group-hover:opacity-100"
            }`}
          />
        </button>

            {/* ------------------------ */}
              <div className={`${open && 'w-screen h-screen absolute bg-lightbox opacity-60 top-0 transition-opacity duration-500'} opacity-0`}></div>
              <div className={`absolute h-screen opacity-0 top-0 p-6 w-2/3 transition duration-300 ease-in-out bg-white ${open ? 'z-20  translate-x-0    opacity-100' : '-translate-x-full'}`}>
                    <nav className='mt-14'>
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
    )
}