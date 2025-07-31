import { create } from "zustand";

// تعریف نوع هر ریویو
export type CustomerReview = {
    id: number;
    user_id: number;
    username: string;
    customer_name: string;
    description: string;
    stars: number;
};

// تعریف state و actions
type CustomerReviewState = {
    isOpenDialog: boolean;
    isOpenDrawer: boolean;
    error: boolean;
    ratings: CustomerReview[];
    isLoadingData: boolean;
    id: number | null;

    // Actions
    setRatings: (ratings: CustomerReview[]) => void;
    setLoadingData: (isLoading: boolean) => void;
    setError: (error: boolean) => void;

    openDialog: () => void;
    closeDialog: () => void;
    openDrawer: () => void;
    closeDrawer: () => void;
};

export const useCustomerReview = create<CustomerReviewState>((set) => ({
    isOpenDialog: false,
    isOpenDrawer: false,
    error: false,
    ratings: [],
    isLoadingData: false,
    id: null,

    // Setters
    setRatings: (ratings) => set({ ratings }),
    setLoadingData: (isLoading) => set({ isLoadingData: isLoading }),
    setError: (error) => set({ error }),

    // Dialog / Drawer Controls
    openDialog: () => set({ isOpenDialog: true }),
    closeDialog: () => set({ isOpenDialog: false }),
    openDrawer: () => set({ isOpenDrawer: true }),
    closeDrawer: () => set({ isOpenDrawer: false }),
}));
