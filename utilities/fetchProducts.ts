export type ProductType = {
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

export async function fetchProducts(): Promise<ProductType[]> {
    const url = process.env.RENDER_EXTERNAL_URL as string || 'http://localhost:3000';

    const promise = await fetch(`${url}/api/fetchProducts`, {
        cache: 'no-store'
    })

    if (!promise.ok){
        throw new Error('Failed to fetch products');
    }

    const data = await promise.json();
    
    return data?.length ? data : [];
}