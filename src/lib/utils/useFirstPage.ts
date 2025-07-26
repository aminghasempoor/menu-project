import { create } from 'zustand'

type MenuType = 'cafe' | 'restaurant' | "firstPage"

interface MenuStore {
    selectedMenu: MenuType
    selectMenu: (menu: MenuType) => void
}

export const useFirstPage = create<MenuStore>((set) => ({
    selectedMenu: "firstPage",
    selectMenu: (menu) => set({ selectedMenu: menu }),
}))
