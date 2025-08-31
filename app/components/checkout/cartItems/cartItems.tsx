'use client';

import React from 'react';
import styles from './cartItems.module.css';
import { Cart } from '@/types/cart';
import Image from 'next/image';
import { useUIStore } from '@/stores/useUIStore';
import { toast } from 'react-toastify';

const CartItems = ({ items }: { items: Cart }) => {

    const { addToCart, removeSingleItem, removeItem } = useUIStore();
    
    if (!items) return;

    const removeBtnHandler = (id: string) => {
        removeItem(id);
        return toast.success('Item removed');
    }

    return (
        <div className={styles.cartItems}>
            <div className={styles.top}>
                <h3 className={styles.headingSmall}>Order Summary</h3>
            </div>

            <div className={styles.bottom}>
                {
                    Object.values(items).map(prd => <div key={prd.item._id} className={styles.product}>
                        <div className={styles.header}>
                            <div className={styles.imgContainer}>
                                <Image src={Object.values(prd.item.img)[0]}
                                       alt={prd.item.title}
                                       height={200}
                                       width={200}
                                       sizes='100%'
                                       className={styles.img} />
                            </div>
                            
                            <div className={styles.details}>
                                <h4 className={styles.headingExSmall}>{prd.item.title}</h4>

                                <span className={styles.textSmall}>
                                    {prd.quantity}
                                    x
                                    {prd.item.price.originalPrice - prd.item.price.discountedPrice}
                                </span>

                                <span className={styles.textSmall}>{
                                    prd.item.price.originalPrice - prd.item.price.discountedPrice
                                }</span>
                            </div>
                        </div>
                        
                        <div className={styles.footer}>
                            <div className={styles.controlBtns}>
                                <button className={styles.controlBtn}
                                        onClick={() => removeSingleItem(prd.item._id)}
                                        disabled={prd.quantity <= 1}>-</button>
                                <span className={styles.counter}>{prd.quantity}</span>
                                <button className={styles.controlBtn}  onClick={() => addToCart(prd.item)}>+</button>
                            </div>

                            <button className={styles.removeBtn} onClick={() => removeBtnHandler(prd.item._id)}>Remove</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default CartItems;
