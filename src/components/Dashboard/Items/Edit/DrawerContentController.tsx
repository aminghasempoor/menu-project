import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { EditItemFormValues } from "./index";
import { useEditItemStore } from "@/lib/utils/useEditItemStore";
export type DialogContentComponentProps = {
    form: UseFormReturn<EditItemFormValues>;
    onSubmit: (values: EditItemFormValues) => void;
};

export default function DrawerContentController({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Items");
    const { isOpen } = useEditItemStore();
    return (
        <Drawer open={isOpen}>
            <DrawerContent className="w-full max-w-md mx-auto rounded-t-3xl pb-6">
                <VisuallyHidden>
                    <DrawerTitle>{t("add_item")}</DrawerTitle>
                    <DrawerDescription>{t("add_item")}</DrawerDescription>
                </VisuallyHidden>
                {/*<DrawerContentComponent form={form} onSubmit={onSubmit} />*/}
            </DrawerContent>
        </Drawer>
    );
}
