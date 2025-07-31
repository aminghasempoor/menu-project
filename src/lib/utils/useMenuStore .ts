// lib/utils/useMenuStore.ts
import { create } from "zustand";

export type Food = {
    id: number;
    name: string | null;
    name_fa: string;
    price: string;
    ingredients: string;
    description: string;
    is_recommended: boolean;
    category_id: number;
    category_name_fa: string | null;
    user_id: number;
    username: string | null;
    image: string;
    views: number;
};

export type MenuCategory = {
    id: number;
    name: string | null;
    name_fa: string;
    foods: Food[];
};

interface MenuState {
    menu: MenuCategory[];
    isLoading: boolean;
    error: boolean;
    setMenu: (menu: MenuCategory[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: boolean) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
    menu: [],
    isLoading: false,
    error: false,
    setMenu: (menu) => set({ menu }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
}));
