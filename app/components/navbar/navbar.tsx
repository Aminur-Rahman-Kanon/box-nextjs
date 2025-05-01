import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Shop from '../nestedNavItem/shop/shop';
import Category from '../nestedNavItem/category/category';

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.navList}>
        <Link href={'/'} className={styles.link}>Home</Link>
      </li>

      <li className={styles.navList}>
        <div className={styles.link}>Shop</div>
        <div className={styles.nestedItem}>
          <Shop />
        </div>
      </li>

      <li className={styles.navList}>
        <div className={styles.link}>Category</div>
        <div className={styles.nestedItem}>
          <Category />
        </div>
      </li>
      
      <li className={styles.navList}>
        <Link href={'/about'} className={styles.link}>About</Link>
      </li>
    </ul>
  )
}

export default Navbar;
