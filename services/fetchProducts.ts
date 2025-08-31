import { unstable_cache } from 'next/cache';
import { ProductType } from '@/types/product';
import { connectToDatabase } from '@/lib/mongoose';
// import redis from '@/lib/redis';
import { Product } from '@/models/products';

//caching the data for 6 hours after fetching from DB
const fetchData = unstable_cache(async () => {
        //connecting database
        await connectToDatabase();
        const test:ProductType[] = await Product.find().lean() as unknown as ProductType[];
        const products = JSON.parse(JSON.stringify(test));
        return products;
    },
    ['cache-products'],
    {
        revalidate: 21600
    })


export default async function fetchProducts (): Promise<ProductType[]> {
    try {
        // return await fetchData()
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products');
    }
}
