import React from 'react';
import styles from './shop.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Shop = () => {
    return (
        <div className={styles.shop}>
            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/1.jpg'}
                            alt=''
                            fill
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>Hot Deals</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/2.jpg'}
                            alt=''
                            fill
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>New Arrivals</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/3.jpg'}
                            alt=''
                            fill
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>Trending</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/4.jpg'}
                            alt=''
                            fill
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>Most Popular</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/5.jpg'}
                            alt=''
                            fill
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>All Bags</span>
            </Link>
        </div>
    )
}

export default Shop
