"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css';
import Link from 'next/link';
import Shop from '../nestedNavItem/shop/shop';
import Category from '../nestedNavItem/category/category';
import { useUIStore } from '@/stores/useUIStore';
import { useCart } from '../cartContextProvider/cartContextProvider';

const Navbar = () => {

  const pathname = usePathname();

  const isCategoryMenuOpen = useUIStore((state => state.isCategoryMenuOpen));
  const isShopMenuOpen = useUIStore((state) => state.isShopMenuOpen);
  const openShopMenu = useUIStore((state) => state.openShopMenu);
  const closeShopMenu = useUIStore((state) => state.closeShopMenu);
  const closeNavigationBar = useUIStore((state) => state.closeDrawer);
  const openCategoryMenu = useUIStore((state) => state.openCategoryMenu);
  const closeCategoryMenu = useUIStore((state) => state.closeCategoryMenu);
  const toggleRouteChangeSpinner = useUIStore(state => state.toggleRouteChangeSpinner);


  useEffect(() => {
    const category = document.getElementById('category');
    const categoryMenu = document.getElementById('category-menu');
    const shop = document.getElementById('shop');
    const shopMenu = document.getElementById('shop-menu');

    category?.addEventListener('mouseenter', openCategoryMenu);
    categoryMenu?.addEventListener('mouseleave', closeCategoryMenu);

    shop?.addEventListener('mouseenter', openShopMenu);
    shopMenu?.addEventListener('mouseleave', closeShopMenu);

  }, [])

  useEffect(() => {
    const delay = setTimeout(() => {
      toggleRouteChangeSpinner();
    }, 100);

    const cleanup = setTimeout(() => {
      toggleRouteChangeSpinner();
    }, 1250)

    return () => {
      clearTimeout(delay);
      clearTimeout(cleanup);
    }
  }, [pathname])

  return (
    <ul className={styles.navbar}>
      <li className={styles.navList}>
        <Link href={'/'} onClick={closeNavigationBar} className={styles.link}>Home</Link>
      </li>

      <li className={styles.navList}>
        <div className={styles.link} id='shop'>Shop</div>
        {
          isShopMenuOpen &&
          <div className={styles.nestedItem} id='shop-menu'>
            <Shop />
          </div>

        }
      </li>

      <li className={styles.navList}>
        <div className={styles.link} id='category'>Category</div>
        {
          isCategoryMenuOpen &&
          <div className={styles.nestedItem} id='category-menu'>
            <Category />
          </div>
        }
      </li>
      
      <li className={styles.navList}>
        <Link href={'/about'} className={styles.link}>About</Link>
      </li>
    </ul>
  )
}

export default Navbar;
