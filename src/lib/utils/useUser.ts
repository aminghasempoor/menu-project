import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
    id: number;
    username: string;
    icon: string;
    name_fa: string;
    email: string;
    telephone: string | null;
    has_restaurant: boolean;
    lat: string;
    lng: string;
    address: string;
}

interface UserState {
    user: User | null;
    loading: boolean;
    error: boolean;
    setLoading: (loading: boolean) => void;
    setError: (error: boolean) => void;
    setUser: (user: User) => void;
    clearUser: () => void;
}

export const useUser = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            loading: false,
            error: false,
            setLoading: (loading) => set({ loading: loading }),
            setError: (error) => set({ error: error }),
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null }),
        }),
        {
            name: "user-storage",
            partialize: (state) => ({ user: state.user }), // فقط user ذخیره شود
        }
    )
);
