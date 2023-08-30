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
        <div className='flex shrink-0 gap-3 items-center'>
          <nav className='absolute left-60 hidden lg:flex'>
            <ul className={`flex flex-row items-center h-11 gap-4 ${windowSize[0] > 640 ? 'flex-row' : ''}`}>
              <li><a className='hover:border-b-4 border-b-orange pb-[30px]' href='#'>Collections</a></li>
              <li><a className='hover:border-b-4 border-b-orange pb-[30px]' href='#'>Men</a></li>
              <li><a className='hover:border-b-4 border-b-orange pb-[30px]' href='#'>Women</a></li>
              <li><a className='hover:border-b-4 border-b-orange pb-[30px]' href='#'>About</a></li>
              <li><a className='hover:border-b-4 border-b-orange pb-[30px]' href='#'>Contact</a></li>
            </ul>
          </nav>
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
        <div className={`${open && 'w-screen h-screen absolute bg-lightbox opacity-60 top-0 transition-opacity duration-500 z-10'} opacity-0`}></div>
          <div className={`absolute h-screen opacity-0 top-0 py-6 px-4 w-2/3 font-semibold transition duration-300 ease-in-out bg-white ${open ? 'z-20  translate-x-0    opacity-100' : '-translate-x-full'}`}>
          <nav className='mt-14'>
            <ul className={`flex flex-col gap-4 ${windowSize[0] > 640 ? 'flex-row' : ''}`}>
              <li><a href='#'>Collections</a></li>
              <li><a href='#'>Men</a></li>
              <li><a href='#'>Women</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </nav>
          </div>
        </div>
    )
}