import { useEffect, useState } from 'react'
import { Product, Image } from '../../types'
import IconPrevious from './IconPrevious'
import IconNext from './IconNext'



const Img = ({src}: Image) =>{
    return(
      <img 
        src={src} 
        alt="sneaker image" 
        width={1000} 
        height={1000}
        />
    )
}


export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  products,
}:{
  autoSlide?: boolean,
  autoSlideInterval?: number,
  products: Product[]
}){
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((current) => (current === 0 ? products[0].images.length - 1 : current - 1))
  const next = () =>
    setCurrent((current) => (current === products[0].images.length - 1 ? 0 : current + 1))

    useEffect(()=>{
      if(!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
      return () => clearInterval(slideInterval)
    }, [])

  return (
    <div className='overflow-hidden relative'>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
      {products.map((product: Product) => {
        return product.images.map((image, id) => {
          return <Img key={id} src={image.src} />
        })
      })}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
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
    </div>
  );
};



// export default function ImageCarousel() {
  
  //   const handleNextImage = () => {
    //     const nextCurrent = current === productImages.length -1 ? 0 : current + 1;
    //     setCurrent(nextCurrent);
    //   };
    
    //   const handlePreviousImage = () => {
      //     const nextCurrent = current === 0 ? productImages.length -1 : current - 1;
      //     setCurrent(nextCurrent);
      //   };
      
      //   return (
//     <div className="grid items-center">
//       <button className="absolute" onClick={handleNextImage}>
//         <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
//           <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
//         </svg>
//       </button>
//       <div>
//         <Image />
//       </div>
//       <button className="absolute justify-self-end" onClick={handlePreviousImage}>
//         <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
//           <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
//         </svg>
//       </button>
//     </div>
//   )
// }
