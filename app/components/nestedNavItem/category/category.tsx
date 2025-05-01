import React from 'react';
import styles from './category.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Category = () => {
    return (
        <div className={styles.category}>
            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/backpack.png'} alt='' fill style={{objectFit:'cover'}} />
                </div>
                <span className={styles.textSmall}>Backpack</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/belt bag.png'} alt='' fill style={{objectFit:'cover'}} />
                </div>
                <span className={styles.textSmall}>Belt Bag</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/bucket bag.png'} alt='' fill style={{objectFit:'cover'}} />
                </div>
                <span className={styles.textSmall}>Bucket Bag</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/clutch bag.png'} alt='' fill style={{objectFit:'cover'}} />
                </div>
                <span className={styles.textSmall}>Clutch Bag</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/crossbody bag.png'} alt='' fill style={{objectFit:'cover'}} />
                </div>
                <span className={styles.textSmall}>Crossbody Bag</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/designer bag.png'} alt='' fill style={{objectFit:'cover'}} />
                </div>
                <span className={styles.textSmall}>Designer Bag</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/saddle bag.png'} alt='' fill style={{objectFit:'cover'}} />
                </div>
                <span className={styles.textSmall}>Saddle Bag</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/shoulder bag.png'} alt='' fill style={{objectFit:'cover'}} />
                </div>
                <span className={styles.textSmall}>Shoulder Bag</span>
            </Link>

            <Link href={''} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/navbar/straw bag.png'} alt='' fill style={{objectFit:'cover'}} />
                </div>
                <span className={styles.textSmall}>Straw Bag</span>
            </Link>
        </div>
    )
}

export default Category
