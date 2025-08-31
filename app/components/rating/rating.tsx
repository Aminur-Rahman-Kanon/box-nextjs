'use client';

import React, { ReactElement, ReactHTMLElement, ReactNode } from 'react';
import styles from './rating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';

type Props = {
    rating: number
}

const Rating:React.FC<Props> = ({ rating }) => {

    const displayStar:ReactNode[] = []
    
    //if rating is below 5 then conditionally create active and inactive rating
    if (rating < 5){
        Array.from(Array(rating)).forEach((str, idx) => displayStar.push(<FontAwesomeIcon key={idx} icon={faStar} className={`${styles.rating} ${styles.active}`}/>));
        const count = 5 - rating;
        Array.from(Array(count)).forEach((str, idx) => displayStar.push(<FontAwesomeIcon key={idx+ rating} icon={faStar} className={`${styles.rating} ${styles.inactive}`}/>))
    }
    //otherwise we create full 5 star rating
    else {
        Array.from(Array(rating)).forEach((str, idx) => displayStar.push(<FontAwesomeIcon key={idx} icon={faStar} className={`${styles.rating} ${styles.active}`}/>))
    }


    return (
        <div className={styles.ratingContainer}>
            {displayStar}
        </div>
    )
}

export default Rating;
