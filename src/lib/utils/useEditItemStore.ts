import { create } from "zustand";

type EditItemState = {
    isOpen: boolean;
    id: number | null;
    openEditDialog: (id : number) => void;
    closeEditDialog: () => void;
};

export const useEditItemStore = create<EditItemState>((set) => ({
    isOpen: false,
    id : null,
    openEditDialog: (id) => set({ isOpen: true, id : id }),
    closeEditDialog: () => set({ isOpen: false}),
}));
