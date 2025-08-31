'use client';

import React from 'react';
import styles from './orderForm.module.css';
import { useUIStore } from '@/stores/useUIStore';

const OrderForm = () => {

    const { orderForm, updateOrderForm } = useUIStore();

    const inputHandler = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const value = {
            id: e.target.name,
            payload: e.target.value
        }

        updateOrderForm(value);
    }

    console.log(orderForm);
    return (
        <div className={styles.orderForm}>
            <div className={styles.top}>
                <h3 className={styles.headingSmall}>Payment Details</h3>
            </div>
            <div className={styles.inputField}>
                <input type='text'
                       className={styles.input}
                       name='name'
                       placeholder='Full Name'
                       onChange={inputHandler} />
            </div>

            <div className={styles.inputField}>
                <input type='text'
                       className={styles.input}
                       name='address'
                       placeholder='Full Address'
                       onChange={inputHandler} />
            </div>

            <div className={styles.inputField}>
                <input type='email'
                       className={styles.input}
                       name='email'
                       placeholder='Email Address'
                       onChange={inputHandler} />
            </div>

            <div className={styles.inputField}>
                <input type='number'
                       className={styles.input}
                       name='phone'
                       placeholder='Phone number'
                       onChange={inputHandler} />
            </div>

            <div className={styles.inputField}>
                <select defaultValue={'Select Area'}
                        name='area'
                        className={styles.select}
                        onChange={inputHandler}>
                    <option defaultChecked disabled>Select Area</option>
                    <option value='inside dhaka'>Inside Dhaka</option>
                    <option value='outside dhaka'>Outside Dhaka</option>
                </select>
            </div>

            <div className={styles.radioInputField}>
                <h3 className={styles.headingSmall}>Payment Method</h3>

                <div className={styles.radioBtns}>
                    <label className={styles.label}>
                        <input type='radio'
                               name='paymentMethod'
                               value={"bkash"}
                               checked={orderForm.paymentMethod === "bkash"}
                               onChange={inputHandler} />
                        
                        Bkash
                    </label>

                    <label className={styles.label}>
                        <input type='radio'
                               name='paymentMethod'
                               value={"cash on delivery"}
                               checked={orderForm.paymentMethod === "cash on delivery"}
                               onChange={inputHandler} />
                        
                        Cash on Delivery
                    </label>
                </div>
            </div>

            <button className={styles.btn}>Order Now</button>
        </div>
    )
}

export default OrderForm;
