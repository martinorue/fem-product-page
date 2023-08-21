import {products} from '../../data'
import { register } from "swiper/element/bundle";
register();

interface ImageProps {
  src: string;
}

const Image = ({src}: ImageProps) =>{
    return(
      <img 
        src={src} 
        alt="sneaker image" 
        width={1000} 
        height={1000}
        />
    )
}

interface Product {
  id: number,
  title: string,
  price: number,
  discountPercentage: number,
  images: string[],
  thumbnails: string[]
}

const ImageCarousel = () => {
  return (
    <swiper-container navigation={true} loop={true}>
      {products.map((product: Product) => {
        return product.images.map((image, index) => {
          return <swiper-slide key={index}><Image src={image}/></swiper-slide>
        })
      })}
    </swiper-container>
  );
};


export default ImageCarousel;

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
