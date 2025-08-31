import { ProductType } from "@/types/product";
import { Cart } from '@/types/cart';

function isCart (item: any): item is Cart {
    if (!item || typeof item !== 'object') return false;

    return Object.values(item).every(val =>
        val &&
        typeof val === 'object' &&
        'item' in val && typeof val.item === 'object' &&
        'quantity' in val && typeof val.quantity === 'number'
    )
}

function getLocalStorage(): Storage | null {
    if (typeof window === 'undefined' || !window.localStorage){
        return null;
    }
    return window.localStorage;
}

//api to get item from localstorage
export function getCart(): Cart {
    //check if window.localstorage is available. if not return {}
    const ls = getLocalStorage();
    if (!ls) return {};

    try {
        const cartObj = ls.getItem('cart');
        let result:Cart = {};
    
        if (cartObj) {
            //if cartObj is not null means there is a cart object
            const parsedCartObj = JSON.parse(cartObj) as Cart;
            //we then check for type in cartObj is it really as Cart type
            const isReallyCart = isCart(parsedCartObj);
            //if true means its a Cart type so we return the Cart oject
            result = isReallyCart ? parsedCartObj : {};
        }

        return result;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
}

//api to store item to localstorage
function storeCart (item: Cart) {
    localStorage.setItem('cart', JSON.stringify(item));
}

export function addToCart (item: ProductType): string {
    //abort if no item passed
    if (!item || !item._id) throw new Error("No item passed");
    const key = String(item._id);

    try {
        //fetch localstorage item first
        const cartObj = getCart();

        //if item exist then increment by 1
        if (key in cartObj){
            cartObj[key].quantity ++;
        }
        //if not then just add it
        else {
            cartObj[key] = {
                item,
                quantity:1
            }
        }

        storeCart(cartObj);
        
        return 'success';
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }   
}

//api to remove individual item from the cart
export function removeSingleQuantity (id: string) {
    if (!id) throw new Error("no id passed as argument");

    const cart = getCart();

    if (!Object.values(cart).length) throw new Error('invalid operation');

    if (id in cart && cart[id].quantity > 1){
        cart[id].quantity --;
        return storeCart(cart);
    }
    else {
        console.error('item not found');
    }
}

export function removeItem (id: string) {
    if (!id) throw new Error('no id passed as argument');

    const cart = getCart();

    if (!Object.values(cart).length) throw new Error('invalid operation');
    
    if (id in cart && cart[id].quantity >= 1){
        delete cart[id];
        return storeCart(cart);
    }
    else {
        throw new Error('failed');
    }
}