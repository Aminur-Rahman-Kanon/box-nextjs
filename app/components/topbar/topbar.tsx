'use client'

import React from 'react';
import styles from './topbar.module.css';
import Image from 'next/image';
import Navbar from '../navbar/navbar';
import CartPanel from '../cartPanel/cartPanel';
import { AlignLeft } from 'lucide-react';
import { useUIStore } from '@/stores/useUIStore';

const Topbar = () => {

  const openSideDrawer = useUIStore(state => state.openDrawer);

  return (
    <div className={styles.topbar}>
      <div className={styles.mobileMenu} onClick={openSideDrawer}>
        <AlignLeft color='black' size={35}/>
      </div>

        <div className={styles.logo}>
            <Image src={'/images/logo/logo.png'}
                   alt='boxdelabonita'
                   width={0}
                   height={0}
                   unoptimized
                   quality={100}
                   className={styles.logoImg}/>
        </div>
        
        <div className={styles.nav}>
            <Navbar />
        </div>

        <div className={styles.cart}>
            <CartPanel />
        </div>
        
    </div>
  )
}

export default Topbar;
