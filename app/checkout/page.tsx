import React from 'react';
import styles from './page.module.css';
import Checkout from '@/app/components/checkout/checkout/checkout';


const Page = () => {

    return (
        <div className={styles.checkout}>
            <Checkout />
        </div>
    )
}

export default Page;
