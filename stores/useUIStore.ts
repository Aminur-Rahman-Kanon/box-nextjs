import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
    isDrawerOpen: boolean,
    isShopMenuOpen: boolean,
    isCategoryMenuOpen: boolean,
    routeChangeSpinner: boolean,
    openDrawer: () => void,
    closeDrawer: () => void,
    toggleDrawer: () => void,
    openShopMenu: () => void,
    closeShopMenu: () => void,
    openCategoryMenu: () => void;
    closeCategoryMenu: () => void,
    toggleRouteChangeSpinner: () => void
}

export const useUIStore = create<UIState>((set) => ({
    isDrawerOpen: false,
    isShopMenuOpen: false,
    isCategoryMenuOpen: false,
    routeChangeSpinner: false,
    openDrawer: () => set(state => ({ isDrawerOpen: true })),
    closeDrawer: () => set(state => ({ isDrawerOpen: false, isCategoryMenuOpen: false, isShopMenuOpen: false })),
    toggleDrawer: () => set(state => ({ isDrawerOpen: state.isDrawerOpen })),
    openShopMenu: () => set(state => ({ isShopMenuOpen: true })),
    closeShopMenu: () => set(state => ({ isShopMenuOpen: false })),
    openCategoryMenu: () => set(state => ({ isCategoryMenuOpen: true })),
    closeCategoryMenu: () => set(state => ({ isCategoryMenuOpen: false })),
    toggleRouteChangeSpinner: () => set(state => ({ routeChangeSpinner: !state.routeChangeSpinner }))
}))
