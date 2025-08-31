'use client';

import React, { useEffect, useState } from 'react';
import styles from './cartPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { useUIStore } from '@/stores/useUIStore';
import { cartItemCount } from "@/utilities/cartItemCount";
import Link from 'next/link';

const CartPanel = () => {
	// fetch the products from localstorage
	const { cart } = useUIStore();

	const [count , setCount] = useState<number>(0);
	
	// count the total item in the cart
	const productCount = cartItemCount(cart);

	//update the counter when item added to cart
	useEffect(() => {
		setCount(productCount);
	}, [productCount])
	
	return (
		<div className={styles.cartPanel}>
			<div className={styles.iconContainer}>
				<FontAwesomeIcon icon={ faMagnifyingGlass } className={styles.icon} />
			</div>

			<div className={styles.iconContainer}>
				<FontAwesomeIcon icon={ faUser } className={styles.icon} />
			</div>

			<Link href={'/checkout'} className={styles.iconContainer}>
				<FontAwesomeIcon icon={ faBasketShopping } className={styles.icon} />
				<span className={styles.counter}>{count}</span>
			</Link>
		</div>
	)
}

export default CartPanel;
