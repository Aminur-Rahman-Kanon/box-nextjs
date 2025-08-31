import React from 'react';
import styles from './productCard.module.css';
import { ProductType } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    product: ProductType
}

const ProductCard:React.FC<Props> = ({ product }) => {

    return (
        <div className={styles.productCard}>
            <Link href={`/product/${product.title}`} className={styles.link}>
                <div className={styles.imgContainer}>
                    <Image src={`${Object.values(product.img)[0]}`}
                           alt={product.title}
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <h3 className={styles.headingBlack}>{product.title}</h3>
                <data className={styles.price}>&#2547; {product.price.originalPrice - product.price.discountedPrice}</data>
            </Link>
            {/* <button onClick={() => console.log('pressed')} className={styles.button}>Buy Now</button> */}
        </div>
    )
}

export default ProductCard;
