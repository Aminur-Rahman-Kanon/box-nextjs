import React from 'react';
import styles from './page.module.css';
import { ProductType } from '@/types/product';
import DisplayProductDetails from '@/app/components/displayProductDetails/displayProductDetails';
import data from '@/app/data/products.json';

interface Props {
    params: {
        title: Promise<string>
    }
}

const Page = async ( { params }: Props ) => {

    const titlePrmise = await params.title;
    const titleProductDecoded = await decodeURI(titlePrmise);

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

export default Page;
