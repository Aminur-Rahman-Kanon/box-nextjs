'use client';

import React, { useState, useEffect, useContext, createContext } from "react";
import { ProductType } from "@/types/product";

type Cart = {
    [key: string]: {
        item: ProductType,
        quantity: number
    }
}

export type CartContextType = {
    cart: Cart,
    addToCart: (item: ProductType) => void
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider ({ children }: { children: React.ReactNode }){
    const [cart, setCart] = useState<Cart>(() => {
        let storage = {};
        
        if (typeof window !== "undefined"){
            const stored = localStorage.getItem('cart');
            
            if (stored){
                return storage = JSON.parse(stored);
            }
            else {
                return {}
            }
        }

        return storage;
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item:ProductType) => {

        if (!item || !item._id) return;

        setCart((prev) => {
            const key = String(item._id);
            const prevItems = {...prev};

            return key in prevItems ? {
                ...prevItems,
                [key]: {
                    ...prevItems[key],
                    quantity: prevItems[key].quantity + 1
                }
            }
            :
            {
                ...prevItems,
                [key]: {
                    item,
                    quantity: 1
                }
            }
        })
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const ctx = useContext(CartContext);

    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    
    return ctx;
}