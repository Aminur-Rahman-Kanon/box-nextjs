import { ProductType } from '@/types/product';
import { connectToDatabase } from '@/lib/mongoose';
import redis from '@/lib/redis';
import { Product } from '@/models/products';

//utility api for fetching products from database and serves to the client component
export default async function fetchProducts (): Promise<ProductType[]> {
    //connecting database
    await connectToDatabase();
    try {
        //checking for cached products
        const cachedProducts:ProductType[] | null = await redis.get('products');
        //if there are cached products send it the client component
        if (cachedProducts){
            // const products:ProductType[] = JSON.parse(cachedProducts);
            return cachedProducts;
        }
        //else fetch products from database cache in redis and then send to the client component
        const products:ProductType[] = await Product.find().lean() as unknown as ProductType[];
        await redis.set('products', products, { ex: 1800 });
        return products;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products');
    }
}
