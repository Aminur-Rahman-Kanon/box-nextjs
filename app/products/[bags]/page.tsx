import React from 'react';
import styles from './page.module.css';
import fetchProducts from '@/services/fetchProducts';
import ProductCategory from '@/app/components/productCategory/productCategory';
import { ProductType } from '@/types/product';


type Params = {
  bags: string
}

export default async function Page({ params }: { params: Params }) {
  const { bags } = await params;
  const product = decodeURIComponent(bags || 'all bags');
  const products:ProductType[] = await fetchProducts()

  return (
    <div className={styles.wrapper}>
      <ProductCategory params={product} products={products}/>
    </div>
  );
}
