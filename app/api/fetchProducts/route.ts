import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongoose';
import redis from '../../../lib/redis';
import { Product } from '../../../models/products';

export async function GET () {
    await connectToDatabase();

    const cached = await redis.get('products');

    console.log(cached)

    if (cached){
        return NextResponse.json(cached);
    }

    const products = await Product.find().lean();

    console.log(products);

    await redis.set('products', JSON.stringify(products), { ex: 1800 });

    return NextResponse.json(products);
}