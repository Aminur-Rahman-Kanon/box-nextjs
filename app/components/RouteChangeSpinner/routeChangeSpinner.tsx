'use client';

import React, { CSSProperties } from 'react';
import styles from './routeChangeSpinner.module.css';
import { PropagateLoader } from 'react-spinners';
import { useUIStore } from '@/stores/useUIStore';

const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: '#e13322',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000'
}

const RouteChangeSpinner = () => {

    const spinner = useUIStore(state => state.routeChangeSpinner);

    return (
        <div>
            <PropagateLoader 
                color='#e13322'
                loading={spinner}
                cssOverride={override}
                size={25}
                aria-label='Loading-Spinner'
                // className={styles.spinner}
                />
        </div>
    )
}

export default RouteChangeSpinner
