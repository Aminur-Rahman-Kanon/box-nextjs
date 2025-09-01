import React from 'react';
import styles from './page.module.css';
import fetchProducts from '@/services/fetchProducts';
import ProductCategory from '@/app/components/productCategory/productCategory';
import { ProductType } from '@/types/product';
import data from '@/app/data/products.json';

// type PageProps = {
//   params: {
//     bags: string
//   }
// }

export default async function Page(params: { params: Promise<{ bags: string }>; }) {
  const { bags } = await params.params;
  const product = decodeURIComponent(bags || 'all bags');
  // const products:ProductType[] = await fetchProducts();

  //manually feeding the data for development phase
  const products: ProductType[] = JSON.parse(JSON.stringify(data.products));

  return (
    <div className={styles.wrapper}>
      <ProductCategory category={product} products={products}/>
    </div>
  );
}

