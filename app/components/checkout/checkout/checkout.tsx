'use client';

import React, { useEffect, useState } from 'react';
import styles from './checkout.module.css';
import { getCart } from '@/utilities/addToCart';
import OrderForm from '../orderForm/orderForm';
import CartItems from '../cartItems/cartItems';
import { Cart } from '@/types/cart';
import { useUIStore } from '@/stores/useUIStore';

const Checkout = () => {

    const [itemCount, setItemCount] = useState<number>(0);
    const [items,setItems] = useState<Cart | {}>({});

    const { cart } = useUIStore();

    useEffect(()  => {
        const itm = Object.values(cart).length ? Object.values(cart).reduce((acc, curr) => acc + curr.quantity, 0) : 0;
        const itms = Object.values(items).length ? Object.values(cart).reduce((acc, curr) => acc + curr.quantity, 0) : 0;
        if (itm !== itms){
            setItemCount(Object.values(cart).length);
            setItems(cart);
        }

        if (!itm) {
            setItemCount(0);
            setItems({});
        }
    }, [cart]);

    console.log(cart);

    //if there are items in the cart then display it
    const displayCart = itemCount ? <div className={styles.container}>
        <OrderForm />
        <CartItems items={cart} />
    </div>
    :
    //otherwise display a default text
    <div className={styles.defaultDisplay}>
        No item added to cart
    </div>
 
    return (
        <div className={styles.checkoutContainer}>
            {displayCart}
        </div>
    )
}

export default Checkout;
