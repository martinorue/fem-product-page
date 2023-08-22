export interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    images: Image[];
    thumbnails: Image[];
}

export interface Image {
    id?: number;
    src: string;
}