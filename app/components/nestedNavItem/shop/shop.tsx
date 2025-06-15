import React from 'react';
import styles from './shop.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useUIStore } from '@/stores/useUIStore';

const Shop = () => {

    const closeDrawer = useUIStore(state => state.closeDrawer);

    return (
        <div className={styles.shop}>
            <Link href={'/products/hot deals'} onClick={ closeDrawer } className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/1.jpg'}
                            alt=''
                            fill
                            sizes='100%'
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>Hot Deals</span>
            </Link>

            <Link href={'/products/new arrivals'} onClick={ closeDrawer } className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/2.jpg'}
                            alt=''
                            fill
                            sizes='100%'
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>New Arrivals</span>
            </Link>

            <Link href={'/products/trending'} onClick={ closeDrawer } className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/3.jpg'}
                            alt=''
                            fill
                            sizes='100%'
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>Trending</span>
            </Link>

            <Link href={'/products/most popular'} onClick={ closeDrawer } className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/4.jpg'}
                            alt=''
                            fill
                            sizes='100%'
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>Most Popular</span>
            </Link>

            <Link href={'/products/all bags'} onClick={ closeDrawer } className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/5.jpg'}
                            alt=''
                            fill
                            sizes='100%'
                            style={{objectFit: 'cover'}}
                            />
                </div>
                <span className={styles.textSmall}>All Bags</span>
            </Link>
        </div>
    )
}

export default Shop
