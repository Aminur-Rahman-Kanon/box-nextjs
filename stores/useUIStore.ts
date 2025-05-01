import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
    isDrawerOpen: boolean,
    isShopMenuOpen: boolean,
    isCategoryMenuOpen: boolean,
    openDrawer: () => void,
    closeDrawer: () => void,
    toggleDrawer: () => void,
    toggleShopMenu: () => void,
    toggleCategoryMenu: () => void
}

export const useUIStore = create<UIState>((set) => ({
    isDrawerOpen: false,
    isShopMenuOpen: false,
    isCategoryMenuOpen: false,
    openDrawer: () => set(state => ({ isDrawerOpen: true })),
    closeDrawer: () => set(state => ({ isDrawerOpen: false })),
    toggleDrawer: () => set(state => ({ isDrawerOpen: state.isDrawerOpen })),
    toggleShopMenu: () => set(state => ({ isShopMenuOpen: !state.isShopMenuOpen})),
    toggleCategoryMenu: () => set(state => ({ isCategoryMenuOpen: !state.isCategoryMenuOpen }))
}))
