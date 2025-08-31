'use client';

import React from 'react';
import styles from './addToCart.module.css';
import { ProductType } from '@/types/product';
// import { useCart } from '../cartContextProvider/cartContextProvider';
import { useUIStore } from '@/stores/useUIStore';
import { toast } from 'react-toastify';

type Props = {
    item: ProductType
}

const AddToCart:React.FC<Props> = ({ item }) => {

    const { addToCart } = useUIStore();

    const btnHandler = (item: ProductType) => {
        addToCart(item);
        return toast.success(`${item.title} added to cart`);
    }

    return (
        <button onClick={() => btnHandler(item)}
                className={styles.btn}>
                Add to Cart
        </button>
    )
}

export default AddToCart;
