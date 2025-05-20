import { UseFormReturn } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogDescription, DialogTitle} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { EditItemProps } from "./index";
import { useEditItemStore } from "@/lib/utils/useEditItemStore";

export type DialogContentComponentProps = {
    form: UseFormReturn<EditItemProps>;
    onSubmit: (values: EditItemFormValues) => void;

};
export default function DialogContentController({ form, onSubmit }: DialogContentComponentProps) {
    const { isOpen } = useEditItemStore();
    const t = useTranslations("Items");
    return (
        <Dialog open={isOpen}>
            <DialogContent className="sm:max-w-[700px] px-2">
                <VisuallyHidden>
                    <DialogTitle>{t("add_item")}</DialogTitle>
                    <DialogDescription>{t("add_item")}</DialogDescription>
                </VisuallyHidden>
                {/*<DialogContentComponent form={form} onSubmit={onSubmit} />*/}
            </DialogContent>
        </Dialog>
    )
}