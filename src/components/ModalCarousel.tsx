import { Dispatch, Fragment, SetStateAction, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Carousel, { ProductImage } from './Carousel'
import { Product } from '../../types'
import IconPrevious from './IconPrevious'
import IconNext from './IconNext'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

type ModalCarouselProps = {
    openModal: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    product: Product
}

export default function ModalCarousel({openModal, setOpen, product}: ModalCarouselProps) {
    const [current, setCurrent] = useState(0)

    const prev = () =>
    setCurrent((current) => (current === 0 ? product.images.length - 1 : current - 1))
  const next = () =>
    setCurrent((current) => (current === product.images.length - 1 ? 0 : current + 1))

    const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10 bg-transparent" initialFocus={cancelButtonRef} onClose={setOpen}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-transparent text-left transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-transparent px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
                <div className="bg-transparent">
                  <div className="sm:flex sm:items-start">
                    <div className='overflow-hidden relative flex flex-col gap-7'>
                        <div
                            className="flex transition-transform ease-out duration-500 cursor-pointer"
                            onClick={() => {
                            const nextOpen = !open
                            console.log(nextOpen)
                            setOpen(nextOpen)
                            }}
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                        {product.images.map((image, id) => {
                            return <ProductImage key={id} src={image.src} alt='sneaker image' width={1000} height={1000} styles='md:rounded-xl' />
                            })}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-between">
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
                                styles={`md:rounded-lg hover:opacity-50 cursor-pointer transition-opacity duration-300 overflow-hidden ${current === id ? "outline outline-2 outline-orange" : ""}`} 
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
