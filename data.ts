import { Product } from "./types"
export const products: Product[] = [
    {
        id: 1,
        title: "Fall Limited Edition Sneakers",
        price: 125,
        discountPercentage: 50,
        images: [
            { id: 1, src: 'src/assets/images/image-product-1.jpg' },
            { id: 2, src: 'src/assets/images/image-product-2.jpg' },
            { id: 3, src: 'src/assets/images/image-product-3.jpg' },
            { id: 4, src: 'src/assets/images/image-product-4.jpg' }
        ],
        thumbnails: [
            { id: 1, src: 'src/assets/images/image-product-1-thumbnail.jpg' },
            { id: 2, src: 'src/assets/images/image-product-2-thumbnail.jpg' },
            { id: 3, src: 'src/assets/images/image-product-3-thumbnail.jpg' },
            { id: 4, src: 'src/assets/images/image-product-4-thumbnail.jpg' }
        ]
    }
]



