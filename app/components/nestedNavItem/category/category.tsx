import React from 'react';
import styles from './category.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useUIStore } from '@/stores/useUIStore';

const Category = () => {

    const closeDrawer = useUIStore(state => state.closeDrawer);

    return (
        <div className={styles.category}>
            <Link href={'/products/backpack'} onClick={closeDrawer} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/backpack.png'}
                            alt='backpack'
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <span className={styles.textSmall}>Backpack</span>
            </Link>

            <Link href={'/products/belt bag'} onClick={closeDrawer} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/belt bag.png'}
                            alt='belt bag'
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <span className={styles.textSmall}>Belt Bag</span>
            </Link>

            <Link href={'/products/bucket bag'} onClick={closeDrawer} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/bucket bag.png'}
                            alt='bucket bag'
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <span className={styles.textSmall}>Bucket Bag</span>
            </Link>

            <Link href={'/products/clutch bag'} onClick={closeDrawer} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/clutch bag.png'}
                            alt='clutch bag'
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <span className={styles.textSmall}>Clutch Bag</span>
            </Link>

            <Link href={'/products/crossbody bag'} onClick={closeDrawer} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/crossbody bag.png'}
                            alt='crossbody bag'
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <span className={styles.textSmall}>Crossbody Bag</span>
            </Link>

            <Link href={'/products/designer bag'} onClick={closeDrawer} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/designer bag.png'}
                            alt='designer bag'
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <span className={styles.textSmall}>Designer Bag</span>
            </Link>

            <Link href={'/products/saddle bag'} onClick={closeDrawer} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/saddle bag.png'}
                            alt='saddle bag'
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <span className={styles.textSmall}>Saddle Bag</span>
            </Link>

            <Link href={'/products/shoulder bag'} onClick={closeDrawer} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/shoulder bag.png'}
                            alt='shoulder bag'
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <span className={styles.textSmall}>Shoulder Bag</span>
            </Link>

            <Link href={'/products/straw bag'} onClick={closeDrawer} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/straw bag.png'}
                            alt='straw bag'
                            fill
                            sizes='100%'
                            className={styles.img} />
                </div>
                <span className={styles.textSmall}>Straw Bag</span>
            </Link>
        </div>
    )
}

export default Category;
