import React from 'react';
import styles from './smallBanner.module.css';
import Image from 'next/image';

const SmallBanner = () => {
    return (
        <div className={styles.smallBanner}>
            <Image src={'/images/others/banner.png'}
                   alt='boxdelabonita'
                   width={0}
                   height={0}
                   unoptimized
                   quality={100}
                   className={styles.img} />
        </div>
    )
}

export default SmallBanner;
