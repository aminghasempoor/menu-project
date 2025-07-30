import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
    user: string | null;
    setUser: (username: string) => void;

    categories: Category[];
    setCategories: (categories: Category[]) => void;
}

export interface Category {
    id: number;
    name: string | null;
    name_fa: string;
    foods: Food[];
}

export interface Food {
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
}

export const useUser = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            categories: [],
            setCategories: (categories) => set({ categories }),
        }),
        {
            name: "user-storage",
            partialize: (state) => ({ user: state.user }), // فقط user را ذخیره می‌کند
        }
    )
);
