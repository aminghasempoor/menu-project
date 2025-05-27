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
import { useEditItemStore } from "@/lib/utils/useEditItemStore";
import DrawerContentComponent from "@/components/Dashboard/Items/Create/DrawerContentComponent";
import { Button } from "@/components/ui/button";
export type DialogContentComponentProps = {
    form: UseFormReturn<EditItemFormValues>;
    onSubmit: (values: EditItemFormValues) => void;
};

export default function DrawerContentController({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Items");
    const isOpen = useEditItemStore((state) => state.isOpen);
    const closeEditDialog = useEditItemStore((state) => state.closeEditDialog);
    return (
        <Drawer open={isOpen}>
            <DrawerContent className="w-full max-w-md mx-auto rounded-t-3xl">
                <VisuallyHidden>
                    <DrawerTitle>{t("add_item")}</DrawerTitle>
                    <DrawerDescription>{t("add_item")}</DrawerDescription>
                </VisuallyHidden>
                <DrawerContentComponent isEdit={true} form={form} onSubmit={onSubmit} />
                <DrawerFooter>
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
