'use client';

import React, { useState } from 'react';
import styles from './displayProductDetails.module.css';
import { ProductType } from '@/types/product';
import Rating from '../rating/rating';
import Image from 'next/image';
import AddToCart from '../addToCart/addToCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import BuyNowBtn from '../buyNowBtn/buyNowBtn';
import { CartProvider } from '../cartContextProvider/cartContextProvider';


type Props = {
    product: ProductType,
    relatedProducts: ProductType[]
}

const DisplayProductDetails:React.FC<Props> = ({ product, relatedProducts }) => {

    const [pos, setPos] = useState<{ x:number, y:number }>({ x:0, y:0 });

    const t = "Exquisite Durable High Quality. height: 10inch. length: 11inch. wide:5.5 inch. Color :As the pitcure shown. Material: PU Luather. Style : Handle, Shoulder, Crossbody. Pattern Type : Geometric. Shape : Envelope. Place of Origin : Zhejiang, China. Closure Type : Zipper Brand. Name : Bateli"

    const matches = t.split(/(?<=\.)/)
    .map(str => str.trim())
    .filter(Boolean);

    const handleMouseMove = (e:React.MouseEvent<HTMLImageElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x =  ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) /rect.height) * 100;
        setPos({ x, y });
    }

    //convert the img url to string so can feed to the backgroundImage url
    const imgUrlAsString = encodeURI(Object.values(product.img)[0]);

    //massage to deliver for whatsapp chat session
    const whatsappMessage = "Hi how can I assist you today";

    return (
        <div className={styles.displayProductDetails}>
            <div className={styles.top}>
                <div className={styles.productImgContainer} onMouseMove={handleMouseMove}>
                    <Image src={Object.values(product.img)[0]}
                        alt={product.title}
                        width={1000}
                        height={1000}
                        //    sizes='100%'
                        className={styles.img}
                        />
                    <div className={styles.imgMagnifier}
                        style={{
                            backgroundImage: `url(${imgUrlAsString})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "300%",
                            backgroundPosition: `${pos.x}% ${pos.y}%`
                        }}>
                    </div>
                </div>

                <div className={styles.productDetailsContainer}>
                    <p className={styles.textBold}>{
                        product.stock > 0 ?
                        <span className={`${styles.textBold} ${styles.green}`}>In Stock</span>
                        :
                        <span className={`${styles.textBold} ${styles.red}`}>Out of Stock</span>
                    }
                    </p>

                    <h1 className={styles.title}>{product.title}</h1>

                    <span className={styles.price}>&#2547;{product.price.originalPrice - product.price.discountedPrice}</span>

                    <div className={styles.rating}>
                        <Rating rating={product.rating}/>
                    </div>

                    <div className={styles.description}>
                        <span className={styles.textSmall}>
                            {matches.map((line, idx) => <p key={idx} className={styles.textSmall}>{line.trim()}</p>)}
                        </span>
                    </div>

                    <div className={styles.btnGroup}>
                        <CartProvider>
                            <div className={styles.btn}>
                                <AddToCart item={product} />
                            </div>
                            <div className={styles.btn}>
                                <BuyNowBtn product={product} />
                            </div>
                        </CartProvider>
                    </div>

                    <div className={styles.container}>
                        <h3 className={styles.headingSmall} style={{alignSelf: 'flex-start'}}>Order by Phone</h3>
                        <div className={styles.btnGroup}>
                            <a href='tel:008801911343436' className={styles.socialBtn}>
                                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                                <span className={styles.btnText}>+8801911343436</span>
                            </a>

                            <a href={`https://wa.me/008801911343436?text=${encodeURIComponent(whatsappMessage)}`}
                                target='_blank'
                                className={styles.socialBtn}>
                                <FontAwesomeIcon icon={faWhatsapp} className={styles.icon}/>
                                <span className={styles.btnText}>Whatsapp</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.container}>
                <h2 className={styles.headingMedium}>Description</h2>
                <div className={styles.gridMinContainer}>
                    {
                        Object.values(product.img).map((img, idx) => <div key={idx} className={styles.imgContainer}>
                            <Image src={img}
                                    alt={product.title}
                                    className={styles.img}
                                    width={800}
                                    height={800}
                                    sizes='100%' />
                        </div>)
                    }
                </div>
            </div>

            <div className={styles.container}>
                <h2 className={styles.headingMedium}>Recommended for you</h2>
                <div className={styles.gridMaxContainer}>
                    {
                        relatedProducts.map(itm => <Link href={`/product/${itm.title}`} key={itm.title} className={styles.productCard}>
                            <div className={styles.imgContainer}>
                                <Image src={Object.values(itm.img)[0]}
                                       alt={itm.title}
                                       width={800}
                                       height={800}
                                       sizes='100%'
                                       className={styles.img} />
                            </div>

                            <div className={styles.detailsContainer}>
                                <h3 className={styles.productHeadingSmall}>{itm.title}</h3>
                                <span className={styles.textSmall}>&#2547;{itm.price.originalPrice - itm.price.discountedPrice}</span>
                                <button className={styles.buyNowBtn}>Buy Now</button>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default DisplayProductDetails;
