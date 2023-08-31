import { Product } from "./types"

export const products: Product[] = [
    {
        id: 1,
        title: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 125,
        discountPercentage: 50,
        images: [
            { id: 1, src: '/src/assets/images/image-product-1.jpg' },
            { id: 2, src: '/src/assets/images/image-product-2.jpg' },
            { id: 3, src: '/src/assets/images/image-product-3.jpg' },
            { id: 4, src: '/src/assets/images/image-product-4.jpg' }
        ],
        thumbnails: [
            { id: 5, src: '/src/assets/images/image-product-1-thumbnail.jpg' },
            { id: 6, src: '/src/assets/images/image-product-2-thumbnail.jpg' },
            { id: 7, src: '/src/assets/images/image-product-3-thumbnail.jpg' },
            { id: 8, src: '/src/assets/images/image-product-4-thumbnail.jpg' }
        ]
    }
]



