import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
import { getCart, addToCart, removeSingleQuantity, removeItem } from '@/utilities/addToCart';
import { ProductType } from '@/types/product';
import OrderForm from '@/types/orderForm';
import { Cart } from '@/types/cart';

interface UIState {
    isDrawerOpen: boolean,
    isShopMenuOpen: boolean,
    isCategoryMenuOpen: boolean,
    routeChangeSpinner: boolean,
    cart: Cart,
    orderForm: OrderForm,
    openDrawer: () => void,
    closeDrawer: () => void,
    toggleDrawer: () => void,
    openShopMenu: () => void,
    closeShopMenu: () => void,
    openCategoryMenu: () => void;
    closeCategoryMenu: () => void,
    toggleRouteChangeSpinner: () => void,
    addToCart: (item: ProductType) => void,
    removeSingleItem: (id: string) => void,
    removeItem: (id: string) => void,
    updateOrderForm: (value: { id: string, payload: string }) => void
}

export const useUIStore = create<UIState>((set) => ({
    isDrawerOpen: false,
    isShopMenuOpen: false,
    isCategoryMenuOpen: false,
    routeChangeSpinner: false,
    cart: getCart(),
    orderForm: {
        name: '',
        address: '',
        email: '',
        phone: '',
        area: '',
        paymentMethod: ''
    },
    openDrawer: () => set(state => ({ isDrawerOpen: true })),
    closeDrawer: () => set(state => ({ isDrawerOpen: false, isCategoryMenuOpen: false, isShopMenuOpen: false })),
    toggleDrawer: () => set(state => ({ isDrawerOpen: state.isDrawerOpen })),
    openShopMenu: () => set(state => ({ isShopMenuOpen: true })),
    closeShopMenu: () => set(state => ({ isShopMenuOpen: false })),
    openCategoryMenu: () => set(state => ({ isCategoryMenuOpen: true })),
    closeCategoryMenu: () => set(state => ({ isCategoryMenuOpen: false })),
    toggleRouteChangeSpinner: () => set(state => ({ routeChangeSpinner: !state.routeChangeSpinner })),
    addToCart: (item):void => set(state => {
        addToCart(item)
        const items = getCart();

        return {
            cart: {...items}
        }
    }),
    removeSingleItem: (id):void => set(state => {
        removeSingleQuantity(id);

        const updatedCart = getCart();
        return {
            cart: {
                ...updatedCart
            }
        }
    }),
    removeItem: (id: string) => set(state => {
        removeItem(id);

        const updatedCart = getCart();

        return {
            cart: {
                ...updatedCart
            }
        }
    }),
    updateOrderForm: (value):void => set(state => ({
        orderForm: {
            ...state.orderForm,
            [value.id]: value.payload
        }
    }))
}))
