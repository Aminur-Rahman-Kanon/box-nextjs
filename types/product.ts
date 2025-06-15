export interface ProductType {
    _id: string,
    stock: number,
    title: string,
    rating: number,
    price: {
        originalPrice: number,
        discountedPrice: number
    },
    color: [],
    img: {
        [key:string]: any
    },
    description: string,
    landingDescription?: string,
    customerReviews: [],
    category: string,
    subCategory: string
}
