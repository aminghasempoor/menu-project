import { create } from "zustand";

type EditCategoryState = {
    isOpen: boolean;
    id: number | null;
    isLoadingData: boolean;
    setLoadingData: (isLoadingData: boolean) => void;
    openEditDialog: (id: number) => void;
    closeEditDialog: () => void;
};

export const useEditCategoryStore = create<EditCategoryState>((set) => ({
    isOpen: false,
    id: null,
    isLoadingData: false,
    setLoadingData: (isLoadingData) => set({ isLoadingData: isLoadingData }),
    openEditDialog: (id) => set({ isOpen: true, id: id }),
    closeEditDialog: () => set({ isOpen: false }),
}));
