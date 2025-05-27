import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerTitle,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { EditItemFormValues } from "./index";
import DrawerContentComponent from "../Create/DrawerContentComponent";
import { Button } from "@/components/ui/button";
import { useEditCategoryStore } from "@/lib/utils/useEditCategoryStore";
export type DialogContentComponentProps = {
    form: UseFormReturn<EditItemFormValues>;
    onSubmit: (values: EditItemFormValues) => void;
};

export default function DrawerContentController({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Categories");
    const isOpen = useEditCategoryStore((state) => state.isOpen);
    const closeEditDialog = useEditCategoryStore((state) => state.closeEditDialog);
    return (
        <Drawer open={isOpen}>
            <DrawerContent className="w-full max-w-md mx-auto rounded-t-3xl pb-6">
                <VisuallyHidden>
                    <DrawerTitle>{t("add_item")}</DrawerTitle>
                    <DrawerDescription>{t("add_item")}</DrawerDescription>
                </VisuallyHidden>
                <DrawerContentComponent isEdit={true} form={form} onSubmit={onSubmit} />
                <DrawerFooter className={"mx-4 py-0"}>
                    <DrawerClose asChild>
                        <Button
                            onClick={() => {
                                closeEditDialog();
                            }}
                            variant="outline"
                        >
                            {t("close")}
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
