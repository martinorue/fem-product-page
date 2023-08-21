import { useState } from "react"

  const productImages = [
    'src/assets/images/image-product-1.jpg',
    'src/assets/images/image-product-2.jpg',
    'src/assets/images/image-product-3.jpg',
    'src/assets/images/image-product-4.jpg'
  ]

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  const Image = () =>{
    const src = productImages[current]
    return(
      <img 
        src={src} 
        alt="sneaker image" 
        />
    )
  }
  
  const handleNextImage = () => {
    const nextCurrent = current === productImages.length -1 ? 0 : current + 1;
    setCurrent(nextCurrent);
  };

  const handlePreviousImage = () => {
    const nextCurrent = current === 0 ? productImages.length -1 : current - 1;
    setCurrent(nextCurrent);
  };

  return (
    <div className="grid items-center">
      <div className="absolute">
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
        </svg>
      </div>
      <div>
        <Image />
      </div>
      <div className="absolute justify-self-end">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
        </svg>
      </div>
    </div>
  )
}
