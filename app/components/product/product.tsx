import React from 'react';
import styles from './product.module.css';
import { ProductType } from '@/types/product'
import Link from 'next/link';
import Image from 'next/image';
import BuyNowBtn from '../buyNowBtn/buyNowBtn';

const Product = ({product}: {product:ProductType}) => {

    if (!product) return;
    
    return (
        <div className={styles.container}>
            <div className={styles.productContainer}>
                <Link href={`/product/${product.title}`} className={styles.product}>
                    <div className={styles.imgContainer}>
                        <Image src={Object.values(product.img)[0]}
                            alt={`${product.title}`}
                            height={800}
                            width={800}
                            sizes='100%'
                            className={styles.img} />
                    </div>

                    <div className={styles.headerContainer}>
                        <h2 className={styles.title}>{product.title}</h2>
                        <div className={styles.priceContainer}>
                            <h3 className={styles.discountedPrice}>&#2547;{product.price.originalPrice - product.price.discountedPrice}</h3>
                            {/* <s className={styles.discountedPrice}>&#2547;{product.price.originalPrice}</s> */}
                        </div>
                    </div>
                </Link>
            </div>
            <BuyNowBtn product={product} />
        </div>
    )
}

export default Product;
