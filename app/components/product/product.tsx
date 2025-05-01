import React from 'react';
import styles from './product.module.css';
import { ProductType } from '../../../utilities/fetchProducts';
import Image from 'next/image';

const Product = ({product}: {product:ProductType}) => {

    if (!product) return;
    
    return (
        <div className={styles.product}>
            <div className={styles.imgContainer}>
                <Image src={Object.values(product.img)[0]}
                       alt={`${product.title}`}
                       height={0}
                       width={0}
                       unoptimized
                       quality={100}
                       className={styles.img} />
            </div>

            <div className={styles.headerContainer}>
                <div className={styles.priceContainer}>
                    <span className={styles.discountedPrice}>&#2547;{product.price.originalPrice - product.price.discountedPrice}</span>
                    <s className={styles.discountedPrice}>&#2547;{product.price.originalPrice}</s>
                </div>

                <h2 className={styles.title}>{product.title}</h2>
                <button className={styles.btn}>Buy Now</button>
            </div>
        </div>
    )
}

export default Product;
