import React from 'react';
import styles from './page.module.css';
import { ProductType } from '@/types/product';
import DisplayProductDetails from '@/app/components/displayProductDetails/displayProductDetails';
import data from '@/app/data/products.json';

type Params = Promise<{ title: string }>

export async function generateMetaData({params}: { params: Params }) {
    const { title } = await params;
}


export default async function Page( {params} : { params: Params }) {
  // ✅ resolve the promise
  const { title } = await params;

  const titleProductDecoded = decodeURI(title);

  console.log(titleProductDecoded)

    //manually feeding the products for development phase
    const products: ProductType[] = JSON.parse(JSON.stringify(data.products))

    const titleProductIndex = products.findIndex(prd => prd.title.toLowerCase() === titleProductDecoded.toLowerCase());
    if (titleProductIndex < 0) return;

    const titleProduct = products.splice(titleProductIndex, 1)[0];

    return (
        <div className={styles.product}>
            <DisplayProductDetails product={titleProduct} relatedProducts={products}/>
        </div>
    )
}

