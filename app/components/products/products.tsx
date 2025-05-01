import React from 'react';
import styles from './products.module.css';
import { fetchProducts } from '../../../utilities/fetchProducts';
import Product from '../product/product';

const Products = async () => {

    const products = await fetchProducts();

    const displayProducts = products?.length ? <div className={styles.displayProduct}>
        {
            products.map(prd => <Product key={prd._id} product={prd}/>)
        }
    </div>
    :
    <div>
        <h2 className={styles.headingMedium}>Nothing to display</h2>
    </div>
    return (
        <div className={styles.products}>
            {displayProducts}
        </div>
    )
}

export default Products;
