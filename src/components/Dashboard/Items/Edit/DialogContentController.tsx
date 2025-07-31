import { UseFormReturn } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { EditItemFormValues } from "./index";
import { useEditItemStore } from "@/lib/utils/useEditItemStore";
import DialogContentComponent from "../Create/DialogContentComponent";
import { X } from "lucide-react";

export type DialogContentComponentProps = {
    form: UseFormReturn<EditItemFormValues>;
    onSubmit: (values: EditItemFormValues) => void;
};
export default function DialogContentController({ form, onSubmit }: DialogContentComponentProps) {
    const isOpen = useEditItemStore((state) => state.isOpen);
    const closeEditDialog = useEditItemStore((state) => state.closeEditDialog);
    const t = useTranslations("Items");
    return (
        <Dialog open={isOpen}>
            <DialogContent className="sm:max-w-[700px] px-2">
                <DialogClose asChild>
                    <X
                        onClick={() => {
                            closeEditDialog();
                        }}
                        size={20}
                        className={"absolute top-2 end-2 cursor-pointer"}
                    />
                </DialogClose>
                <VisuallyHidden>
                    <DialogTitle>{t("add_item")}</DialogTitle>
                    <DialogDescription>{t("add_item")}</DialogDescription>
                </VisuallyHidden>
                <DialogContentComponent isEdit={true} form={form} onSubmit={onSubmit} />
            </DialogContent>
        </Dialog>
    );
}
