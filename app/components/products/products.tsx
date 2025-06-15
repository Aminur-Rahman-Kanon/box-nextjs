import React from 'react';
import styles from './products.module.css';
import fetchProducts from '@/services/fetchProducts';
import Product from '../product/product';
import { ProductType } from '@/types/product';

const Products = async () => {

    const products:ProductType[] | string = await fetchProducts();

    let displayProducts;
    if (typeof products === 'string'){
        displayProducts = <div>
            <h2>Nothing to display</h2>
        </div>
    }
    else {
        displayProducts = <div className={styles.displayProduct}>
        {
            products.map(prd => <Product key={prd._id} product={prd}/>)
        }
        </div>
    }

    return (
        <div className={styles.products}>
            {displayProducts}
        </div>
    )
}

export default Products;
