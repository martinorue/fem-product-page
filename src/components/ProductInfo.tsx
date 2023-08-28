import { Product } from '../../types'
import { formatPrice } from '../utils/formatPrice'

type ProductInfoProps = {
    product: Product;
};

export default function ProductInfo({product}: ProductInfoProps) {

const {title, description, price, discountPercentage} = product

return (
    <section className='flex flex-col gap-4'>
        <span className='text-orange uppercase font-bold text-sm tracking-wider'>sneaker company</span>
        <h1 className='text-3xl font-bold text-very-dark-blue md:text-4xl'>{title}</h1>
        <p className='text-dark-grayish-blue'>{description}</p>
        <div className='flex justify-between items-center md:grid'>
            <div className='flex gap-4 items-center'>
                <span className='text-3xl font-bold text-very-dark-blue'>${formatPrice(price)}</span>
                <span className='text-orange font-bold rounded-md bg-pale-orange px-2'>{discountPercentage}%</span>
            </div>
            <div>
                <span className='text-grayish-blue font-semibold'>
                    <del>
                        ${formatPrice(price * 100 / discountPercentage)}
                    </del>
                </span>
            </div>
        </div>
    </section>
  )
}
