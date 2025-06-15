'use client';

import React from 'react';
import styles from './topMenu.module.css';

type Props = {
    totalItem:number,
    onchange: (sortType:string) => void;
}

const TopMenu:React.FC<Props> = ({ totalItem, onchange }) => {
    return (
        <div className={styles.topMenu}>
            <div className={styles.leftPanel}>
                <span className={styles.label}><strong>{totalItem}</strong> Products found</span>
            </div>

            <div className={styles.rightPanel}>
                <label className={styles.label}>Sort by : </label>
                <select className={styles.select} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => onchange(e.target.value)}>
                    <option value={'default'}>Default sorting</option>
                    <option value={'popular'}>By popularity</option>
                    {/* <option value={'latest'}>Latest item</option>
                    <option value={'average'}>Average rating</option> */}
                    <option value={'price low to high'}>Price low to high</option>
                    <option value={'price high to low'}>Price high to low</option>
                </select>
            </div>
        </div>
    )
}

export default TopMenu;
