import React from 'react';
import styles from './cartPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const CartPanel = () => {
  return (
    <div className={styles.cartPanel}>
        <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={ faMagnifyingGlass } className={styles.icon} />
        </div>

        <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={ faUser } className={styles.icon} />
        </div>

        <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={ faBasketShopping } className={styles.icon} />
            <span className={styles.counter}>0</span>
        </div>
    </div>
  )
}

export default CartPanel;
