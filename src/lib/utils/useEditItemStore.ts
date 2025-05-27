import { create } from "zustand";

type EditItemState = {
    isOpen: boolean;
    isLoadingData: boolean;
    setLoadingData: (isLoadingData: boolean) => void;
    id: number | null;
    openEditDialog: (id: number) => void;
    closeEditDialog: () => void;
};

export const useEditItemStore = create<EditItemState>((set) => ({
    isOpen: false,
    isLoadingData: false,
    setLoadingData: (isLoadingData) => set({ isLoadingData: isLoadingData }),
    id: null,
    openEditDialog: (id) => set({ isOpen: true, id: id }),
    closeEditDialog: () => set({ isOpen: false }),
}));
