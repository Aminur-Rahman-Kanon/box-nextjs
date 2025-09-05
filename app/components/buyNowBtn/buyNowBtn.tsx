'use client';

import React from 'react';
import styles from './buyNowBtn.module.css';
import { ProductType } from '@/types/product';
import { addToCart } from '@/utilities/addToCart';

type Props = {
    product: ProductType
}

const btnHandler = (e:React.MouseEvent , item:ProductType) => {
    e.preventDefault();

    const status = addToCart(item);
    if (status === 'success'){
        window.location.href = '/checkout';
    }
    else {
        throw new Error('failed to add item to the cart');
    }
}

const BuyNowBtn:React.FC<Props> = ({ product }) => {

    return (
        <button className={styles.buyNowBtn} onClick={(e) => btnHandler(e, product)}>
            Buy Now
        </button>
    )
}

export default BuyNowBtn;
