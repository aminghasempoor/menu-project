import { create } from "zustand";

type EditCategoryState = {
    isOpen: boolean;
    id: number | null;
    openEditDialog: (id: number) => void;
    closeEditDialog: () => void;
};

export const useEditCategoryStore = create<EditCategoryState>((set) => ({
    isOpen: false,
    id: null,
    openEditDialog: (id) => set({ isOpen: true, id: id }),
    closeEditDialog: () => set({ isOpen: false }),
}));
