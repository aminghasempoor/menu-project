"use client";
import { create } from "zustand";

interface UserStoreState {
    isAuth: boolean;
    userChangedLanguage: boolean;
    initAuthState: boolean;
    token: string | null;
    user: Record<string, string>;
    clearUser: () => void;
    changeUser: (user: Record<string, string>) => void;
    changeUserLanguage: (language: string) => void;
    changeAuthState: (isAuth: boolean) => void;
    changeLanguageState: (userChangedLanguage: boolean) => void;
    clearToken: () => void;
    setToken: (token: string) => void;
    getUser: () => Promise<void>;
    initialize: () => Promise<void>;
}

const useUserStore = create<UserStoreState>((set, get) => ({
    isAuth: false,
    userChangedLanguage: false,
    initAuthState: false,
    token: localStorage.getItem("_token") || null,
    user: {},

    clearUser: () => set({ user: {} }),

    changeUser: (user: Record<string, string>) => set({ user }),

    changeUserLanguage: (language: string) =>
        set((state) => ({
            user: { ...state.user, user_language: language },
        })),

    changeAuthState: (isAuth: boolean) => set({ isAuth }),

    changeLanguageState: (userChangedLanguage: boolean) => set({ userChangedLanguage }),

    clearToken: () => {
        localStorage.removeItem("_token");
        set({ token: null });
    },

    setToken: (token: string) => {
        localStorage.setItem("_token", token);
        set({ token });
    },

    getUser: async () => {
        const token = get().token;
        if (!token) return;

        // Uncomment and implement your API call logic here
        // try {
        //   const { data } = await axios.get(GET_USER_ROUTE, {
        //     headers: { authorization: `Bearer ${token}` },
        //   });
        //   set({ user: data, isAuth: true, userChangedLanguage: true });
        // } catch (error) {
        //   if (error.response && error.response.status === 401) {
        //     get().clearToken();
        //   }
        // }
    },

    // Initialize the token and user data on load
    initialize: async () => {
        const token = get().token;
        if (!token) {
            get().clearUser();
            get().changeAuthState(false);
            get().changeLanguageState(false);
            return;
        }
        await get().getUser();
    },
}));
export default useUserStore;
