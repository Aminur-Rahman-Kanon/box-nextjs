'use client'

import React from 'react';
import styles from './sideDrawer.module.css';
import { useUIStore } from '@/stores/useUIStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';
import Shop from '../nestedNavItem/shop/shop';
import Category from '../nestedNavItem/category/category';

const SideDrawer = () => {

    const isDrawerOpen = useUIStore((state) => state.isDrawerOpen);
    const closeSideDrawer = useUIStore((state) => state.closeDrawer);
    const isShopMenuOpen = useUIStore((state) => state.isShopMenuOpen);
    const isCategoryMenuOpen = useUIStore((state) => state.isCategoryMenuOpen);
    const openShopMenu = useUIStore(state => state.openShopMenu);
    const closeShopMenu = useUIStore(state => state.closeShopMenu);
    const openCategoryMenu = useUIStore(state => state.openCategoryMenu);
    const closeCategoryMenu = useUIStore(state => state.closeCategoryMenu)
    
    return (
        <div className={isDrawerOpen ? `${styles.sidedrawerContainer} ${styles.show}` : styles.sidedrawerContainer}>
            <div className={styles.container}>
                <div className={styles.xContainer} onClick={closeSideDrawer}>
                    <FontAwesomeIcon icon={faX} className={styles.x}/>
                </div>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <Image src={'/images/logo/logo.png'} alt='boxdelabonita' height={0} width={0} unoptimized quality={100} className={styles.logoImg} />
                    </div>
                    <ul className={styles.navbarContainer}>
                        <li className={styles.navbar}>
                            <a href='/' className={styles.link}>Home</a>
                        </li>
                        <li className={styles.parentList}>
                            <span className={styles.parent} onClick={openShopMenu}>Shop</span>
                            <div className={isShopMenuOpen ? `${styles.child} ${styles.slideRight}` : styles.child}>
                                <div className={styles.angleLeftContainer} onClick={closeShopMenu}>
                                    <FontAwesomeIcon icon={ faAngleLeft } className={styles.angleIcon} />
                                </div>
                                <div className={styles.childContainer}>
                                    <Shop />
                                </div>
                            </div>
                        </li>
                        <li className={styles.parentList}>
                            <span className={styles.parent} onClick={openCategoryMenu}>Category</span>
                            <div className={isCategoryMenuOpen ? `${styles.child} ${styles.slideRight}` : styles.child}>
                                <div className={styles.angleLeftContainer} onClick={closeCategoryMenu}>
                                    <FontAwesomeIcon icon={ faAngleLeft } className={styles.angleIcon} />
                                </div>
                                <div className={styles.childContainer}>
                                    <Category />
                                </div>
                            </div>
                        </li>
                        <li className={styles.navbar}>
                            <a href='/about' className={styles.link}>About</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomContainer}>
                        <div className={styles.items}>
                            <h3 className={styles.headingSmallBlack}>Contact us</h3>
                            <p className={styles.textSmallBlack}>Office: 82/12/1 North Jatrabari, Dhaka, 1204</p>
                            <p className={styles.textSmallBlack}>Email: boxdelabonita@gmail.com</p>
                            <p className={styles.textSmallBlack}>Phone: +8801911343436</p>
                        </div>
                        <div className={styles.socialLinks}>
                            <a data-testid="facebook" href="https://facebook.com/box.de.la.bonita" target="_blank" className={styles.socialLinkItem}><FontAwesomeIcon icon={faFacebook} className={styles.socialLinkIcon}/></a>
                            <a data-testid='twitter' href="" className={styles.socialLinkItem}><FontAwesomeIcon icon={faTwitter} className={styles.socialLinkIcon}/></a>
                            <a data-testid='instagram' href="https://www.instagram.com/p/CzB1FKmviM_/" target="_blank" className={styles.socialLinkItem}><FontAwesomeIcon icon={faInstagram} className={styles.socialLinkIcon}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideDrawer
