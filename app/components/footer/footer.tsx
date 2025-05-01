import React from "react";
import styles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

//this is the footer component
const Footer = () => {

    return (
        <div data-testid="footer" className={styles.footerMain}>
            <div className={styles.topSection}>
                <div className={styles.topSectionContainer}>
                    <h2 className={styles.headerH2}>CONTACT US</h2>
                    <div className={styles.topSectionContainerItem}>
                        <p className={styles.headerP}><strong>Head Office:</strong>&nbsp;82/12/1, North Jatrabari,  Dhaka 1204</p>
                        <p className={styles.headerP}><strong>Phone: </strong>&nbsp;+8801911343436</p>
                        <p className={styles.headerP}><strong>Email: </strong>&nbsp;boxdelabonita@gmail.com</p>
                    </div>

                    <div className={styles.socialLink}>
                        <a data-testid="facebook" href="https://facebook.com/box.de.la.bonita" target="_blank" className={styles.socialLinkItem}><FontAwesomeIcon icon={faFacebook} className={styles.socialLinkIcon}/></a>
                        <a data-testid='twitter' href="" className={styles.socialLinkItem}><FontAwesomeIcon icon={faTwitter} className={styles.socialLinkIcon}/></a>
                        <a data-testid='instagram' href="https://www.instagram.com/p/CzB1FKmviM_/" target="_blank" className={styles.socialLinkItem}><FontAwesomeIcon icon={faInstagram} className={styles.socialLinkIcon}/></a>
                        {/* <a href="" className={styles.socialLinkItem}><FontAwesomeIcon icon={faYoutube} className={styles.socialLinkIcon}/></a> */}
                    </div>
                </div>
                <div className={styles.topSectionContainer}>
                    <h2 className={styles.headerH2}>CUSTOMER SERVICES</h2>
                    <div className={styles.topSectionContainerItem}>
                        <a href="/profile/track-order" className={styles.topSectionLink}>Track Your Orders</a>
                        <a href="" className={styles.topSectionLink}>Product Care & Repair</a>
                        <a href="" className={styles.topSectionLink}>Shipping & Returns</a>
                    </div>
                </div>
                <div className={styles.topSectionContainer}>
                    <h2 className={styles.headerH2}>ABOUT US</h2>
                    <div className={styles.topSectionContainerItem}>
                        <a href="/about" className={styles.topSectionLink}>About Us</a>
                        {/* <a href="" className={styles.topSectionLink}>Sitemap</a> */}
                        <a href="" className={styles.topSectionLink}>Terms & Conditions</a>
                        <a href="" className={styles.topSectionLink}>Privacy Policy</a>
                    </div>
                </div>
                <div className={styles.topSectionContainer}>
                    <h2 className={styles.headerH2}>CATEGORY</h2>
                    <div className={styles.topSectionContainerItem}>
                        <Link href="/bag/bucket bag" className={styles.topSectionLink}>Bucket Bag</Link>
                        <Link href="/bag/clutch bag" className={styles.topSectionLink}>Clutch Bag</Link>
                        <Link href="/bag/crossbody bag" className={styles.topSectionLink}>Crossbody Bag</Link>
                        <Link href="/bag/designer bag" className={styles.topSectionLink}>Designer Bag</Link>
                        <Link href="/bag/saddle bag" className={styles.topSectionLink}>Saddle Bag</Link>
                        <Link href="/bag/shoulder bag" className={styles.topSectionLink}>Shoulder Bag</Link>
                        <Link href="/bag/straw bag" className={styles.topSectionLink}>Straw Bag</Link>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.bottomSectionItem}>
                    <p className={styles.copyright}>Copyright &copy; 2023 Boxdelabonita</p>
                </div>
                <div className={styles.bottomSectionItem}>
                    <Image src={'/images/others/cod.png'} alt="cash on delivery" height={0} width={0} unoptimized quality={100} className={styles.paymentImg}/>
                    <Image src={'/images/others/bkash.png'} alt="bikash" height={0} width={0} unoptimized quality={100} className={styles.paymentImg} />
                    <Image src={'/images/others/visa.png'} alt="master card" height={0} width={0} unoptimized quality={100} className={styles.paymentImg}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;