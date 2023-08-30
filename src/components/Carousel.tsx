import { useEffect, useState } from 'react'
import { Product } from '../../types'
import IconPrevious from './IconPrevious'
import IconNext from './IconNext'
import ModalCarousel from './ModalCarousel'

type ProductImageProps = {
  src: string,
  alt: string,
  width: number,
  height: number,
  styles: string
}

export const ProductImage = ({src, alt, width, height, styles}: ProductImageProps) => {
    return(
      <img 
        src={src} 
        alt={alt}
        width={width} 
        height={height}
        className={styles}
      />
    )
}

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  product,
}:{
  autoSlide?: boolean,
  autoSlideInterval?: number,
  product: Product
}){
  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)

  const prev = () =>
    setCurrent((current) => (current === 0 ? product.images.length - 1 : current - 1))
  const next = () =>
    setCurrent((current) => (current === product.images.length - 1 ? 0 : current + 1))

    useEffect(()=> {
      if(!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
      return () => clearInterval(slideInterval)
    }, [])

  return (
    <div className='overflow-hidden relative flex flex-col gap-5'>
      <div
        className="flex gap-1 transition-transform ease-out duration-500 cursor-pointer"
        onClick={() => {
          const nextOpen = !open
          setOpen(nextOpen)
        }}
        style={{ transform: `translateX(-${current * 100 + current}%)` }}
      >
      {product.images.map((image, id) => {
          return <ProductImage key={id} src={image.src} alt='sneaker image' width={1000} height={1000} styles='md:rounded-xl' />
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 md:hidden">
        <button
          onClick={prev}
          className="rounded-full shadow bg-white/80 text-gray-800 hover:bg-white w-11 h-11 flex items-center justify-start pl-3.5"
        >
          <IconPrevious />
        </button>
        <button
          onClick={next}
          className="rounded-full shadow bg-white/80 text-gray-800 hover:bg-white w-11 h-11 flex items-center justify-start pl-4"
        >
          <IconNext />
        </button>
      </div>
      <div className='hidden md:flex justify-between p-[2px]'>
        {
          product.thumbnails.map((image, id) => {
            return(
              <div key={id}>
                <input 
                  type="radio" 
                  name='img' 
                  id={`${id}`} 
                  className='appearance-none hidden'
                  onClick={() => setCurrent(id)}
                />
                <label htmlFor={`${id}`} className='cursor-pointer'>
                  <ProductImage 
                    src={image.src} 
                    alt='sneaker image' 
                    width={70} 
                    height={70} 
                    styles={`md:rounded-lg hover:opacity-50 cursor-pointer transition-opacity duration-300 overflow-hidden ${current === id ? "outline outline-2 outline-orange" : ""}`} 
                  />
                </label>
              </div>
            ) 
          })
        }
      </div>
      {open &&
        <ModalCarousel open={open} setOpen={setOpen} product={product}/>
      }
    </div>
  );
};