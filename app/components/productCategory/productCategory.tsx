'use client'

import React, { useEffect, useState } from 'react';
import styles from './productCategory.module.css';
import { ProductType } from '@/types/product';
import ProductCard from './productCard/productCard';
import TopMenu from './topMenu/topMenu';

type PageProps = {
    category?: string,
    products: ProductType[]
}

const ProductCategory= ({category, products}: PageProps) => {
    //this array is used to store products according to the params and sorting and display them
    const [sortedProducts, setSortedProducts] = useState<ProductType[] | []>(products);
    //this array will keep copy all products after sort by params and then later will be used to setSortedProducts in default form
    const [sortedProductsCopy, setSortedProductsCopy] = useState<ProductType[] | []>([]);
    //this hook filter the products by the params such as 'all products', 'bucket bag' etc
    useEffect(() => {
        if (typeof(products) !== 'string'){
            if (category === 'all bags'){
                setSortedProducts(products);
                setSortedProductsCopy(products);
            }
            else {
                const filtered = products.filter(itm => itm.category === category || itm.subCategory === category)
                setSortedProducts(filtered);
                setSortedProductsCopy(filtered);
            }
        }        
    }, [category]);

    //this will sort the products according to the sorting order
    const handleSort = (sortType:string):void => {
        const sorted = [...sortedProducts];
        
        switch (sortType) {
            case 'popular':
                sorted.sort((a, b) => a.rating - b.rating)
                setSortedProducts(sorted);
                break;
                
            case 'price low to high':
                sorted.sort((a, b) => (a.price.originalPrice - a.price.discountedPrice) - (b.price.originalPrice - b.price.discountedPrice));
                setSortedProducts(sorted);
                break;
                
            case 'price high to low':
                sorted.sort((a, b) => (b.price.originalPrice - b.price.discountedPrice) - (a.price.originalPrice - a.price.discountedPrice));
                setSortedProducts(sorted);
                break;

            default:
                setSortedProducts(sortedProductsCopy);
                break;
            }
    }
    
    return (
        <div className={styles.productCategory}>
            <div className={styles.topMenu}>
                <TopMenu totalItem={sortedProducts.length} onchange={handleSort}/>
            </div>
            <div className={styles.productContainer}>
                {sortedProducts.map(prd => <ProductCard key={prd._id} product={prd}/>)}
            </div>
        </div>
    )
}

export default ProductCategory;
