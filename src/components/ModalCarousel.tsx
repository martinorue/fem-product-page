import { Dispatch, Fragment, SetStateAction, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ProductImage } from './Carousel'
import { Product } from '../../types'
import IconPrevious from './IconPrevious'
import IconNext from './IconNext'

type ModalCarouselProps = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    product: Product
}

export default function ModalCarousel({open, setOpen, product}: ModalCarouselProps) {
    const [current, setCurrent] = useState(0)
    const [close, setClose] = useState(false)

    const prev = () =>
    setCurrent((current) => (current === 0 ? product.images.length - 1 : current - 1))
  const next = () =>
    setCurrent((current) => (current === product.images.length - 1 ? 0 : current + 1))

    const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 bg-transparent" initialFocus={cancelButtonRef} onClose={() => setClose(true)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-96 flex flex-col gap-3 transform rounded-lg bg-transparent text-left transition-all">
                <div className="bg-transparent flex flex-row-reverse outline-none border-none bg-none">
                  <button
                    type="button"
                    className="text-sm font-semibold mt-0 w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" fill="hsl(0, 0%, 100%)" className='hover:fill-orange transition-all duration-200 cursor-pointer'>
                      <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fillRule="evenodd"/>
                    </svg>
                  </button>
                </div>
                <div className="bg-transparent">
                  <div className="sm:flex sm:items-start">
                    <div className='relative flex flex-col gap-7'>
                        <div
                            className="flex cursor-pointer"
                            onClick={() => {
                              const nextOpen = !open
                              console.log(nextOpen)
                              setOpen(nextOpen)
                            }}
                            // style={{ transform: `translateX(${100}%)` }}
                        >
                        {product.images.map((image, id) => {
                            return <ProductImage key={id} src={image.src} alt='sneaker image' width={1000} height={1000} styles={`md:rounded-xl ${current === id ? "" : "hidden"}`} />
                            })}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-between z-20">
                            <button
                            onClick={prev}
                            className="absolute rounded-full shadow -left-5 bg-white/80 text-gray-800 hover:bg-white w-11 h-11 flex items-center justify-start pl-3.5"
                            >
                            <IconPrevious />
                            </button>
                            <button
                            onClick={next}
                            className="absolute z-30 -right-5 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white w-11 h-11 flex items-center justify-start pl-4"
                            >
                            <IconNext />
                            </button>
                        </div>
                    </div>
                  </div>
                </div>
                <div className='hidden md:flex justify-between p-[2px] bg-transparent'>
                    {
                    product.thumbnails.map((image, id) => {
                        return(
                        <div key={id}>
                            <input 
                            type="radio" 
                            name='img' 
                            id={`${id}-modal`} 
                            className='appearance-none hidden'
                            onClick={() => setCurrent(id)}
                            />
                            <label htmlFor={`${id}-modal`} className='cursor-pointer'>
                            <ProductImage 
                                src={image.src} 
                                alt='sneaker image' 
                                width={80} 
                                height={80} 
                                styles={`md:rounded-lg hover:opacity-50 cursor-pointer transition-opacity duration-300 ${current === id ? "outline outline-2 outline-orange" : ""}`} 
                            />
                            </label>
                        </div>
                        ) 
                    })
                    }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

  )
}
