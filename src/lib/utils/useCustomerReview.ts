import { create } from "zustand";

type CustomerReviewState = {
    isOpenDialog: boolean;
    ratings : [];
    setRatings : (ratings: any[]) => void;
    isOpenDrawer: boolean;
    isLoadingData: boolean;
    setLoadingData: (isLoadingData: boolean) => void;
    id: number | null;
    openDialog: () => void;
    openDrawer: () => void;
    closeDialog: () => void;
    closeDrawer: () => void;
};

export const useCustomerReview = create<CustomerReviewState>((set) => ({
    isOpenDialog: false,
    ratings : [],
    setRatings : () => {},
    isOpenDrawer: false,
    isLoadingData: false,
    setLoadingData: (isLoadingData) => set({ isLoadingData: isLoadingData }),
    id: null,
    openDialog: () => set({ isOpenDialog: true}),
    openDrawer: () => set({ isOpenDrawer: true }),
    closeDialog: () => set({ isOpenDialog: false }),
    closeDrawer: () => set({ isOpenDrawer: false }),
}));
