'use client';

import Image from "next/image";
import Slider from "./slider";
import Link from "next/link";
import styles from './mainCategory.module.css';

const mainCategoryData = [
    <Link href={'/bag/bucket bag'} className={styles.link}>
        <div className={styles.imgContainer}>
            <Image src={'/images/category/bag2.jpg'}
                    alt="bucket bag"
                    height={0}
                    width={0}
                    unoptimized
                    quality={100}
                    className={styles.img}/>
        </div>
        <span className={styles.textSmall}>Bucket Bag</span>
    </Link>,

    <Link href={'/bag/shoulder bag'} className={styles.link}>
        <div className={styles.imgContainer}>
            <Image src={'/images/category/bag1.jpg'}
                    alt="shoulder bag"
                    height={0}
                    width={0}
                    unoptimized
                    quality={100}
                    className={styles.img}/>
        </div>
        <span className={styles.textSmall}>Shoulder Bag</span>
    </Link>,

    <Link href={'/bag/backpack'} className={styles.link}>
        <div className={styles.imgContainer}>
            <Image src={'/images/category/bag3.jpg'}
                    alt="backpack"
                    height={0}
                    width={0}
                    unoptimized
                    quality={100}
                    className={styles.img}/>
        </div>
        <span className={styles.textSmall}>Backpack</span>
    </Link>,

    <Link href={'/bag/clutch bag'} className={styles.link}>
        <div className={styles.imgContainer}>
            <Image src={'/images/category/bag4.jpg'}
                    alt="bucket bag"
                    height={0}
                    width={0}
                    unoptimized
                    quality={100}
                    className={styles.img}/>
        </div>
        <span className={styles.textSmall}>Clutch Bag</span>
    </Link>,

    <Link href={'/bag/saddle bag'} className={styles.link}>
        <div className={styles.imgContainer}>
            <Image src={'/images/category/bag7.jpg'}
                    alt="saddle bag"
                    height={0}
                    width={0}
                    unoptimized
                    quality={100}
                    className={styles.img}/>
        </div>
        <span className={styles.textSmall}>Saddle Bag</span>
    </Link>,

    <Link href={'/bag/designer bag'} className={styles.link}>
        <div className={styles.imgContainer}>
            <Image src={'/images/category/bag6.jpg'}
                    alt="designer bag"
                    height={0}
                    width={0}
                    unoptimized
                    quality={100}
                    className={styles.img}/>
        </div>
        <span className={styles.textSmall}>Designer Bag</span>
    </Link>,

    <Link href={'/bag/belt & sling bag'} className={styles.link}>
        <div className={styles.imgContainer}>
            <Image src={'/images/category/bag8.jpg'}
                    alt="belt & sling bag"
                    height={0}
                    width={0}
                    unoptimized
                    quality={100}
                    className={styles.img}/>
        </div>
        <span className={styles.textSmall}>Belt & Sling Bag</span>
    </Link>,

    <Link href={'/bag/straw bag'} className={styles.link}>
        <div className={styles.imgContainer}>
            <Image src={'/images/category/bag9.jpg'}
                    alt="straw bag"
                    height={0}
                    width={0}
                    unoptimized
                    quality={100}
                    className={styles.img}/>
        </div>
        <span className={styles.textSmall}>Straw Bag</span>
    </Link>,

    <Link href={'/bag/crossbody bag'} className={styles.link}>
        <div className={styles.imgContainer}>
            <Image src={'/images/category/bag5.jpg'}
                    alt="crossbody bag"
                    height={0}
                    width={0}
                    unoptimized
                    quality={100}
                    className={styles.img}/>
        </div>
        <span className={styles.textSmall}>Crossbody Bag</span>
    </Link>
]

const MainCategory = () => {
    return (
        <div className={styles.mainCategory}>
            <Slider items={mainCategoryData} />
        </div>
    )
}

export default MainCategory;
