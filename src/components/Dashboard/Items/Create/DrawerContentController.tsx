import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { AddItemFormValues } from "./AddItem";
import DrawerContentComponent from "./DrawerContentComponent";
import { useEditItemStore } from "@/lib/utils/useEditItemStore";
export type DialogContentComponentProps = {
    isEdit?: boolean;
    form: UseFormReturn<AddItemFormValues>;
    onSubmit: (values: AddItemFormValues) => void;
};

export default function DrawerContentController({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Items");
    const closeEditDialog = useEditItemStore((state) => state.closeEditDialog);
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant="secondary"
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 capitalize text-xl font-semibold"
                >
                    <div className={"py-2 flex items-center justify-center gap-x-3"}>
                        {t("add_item")}
                        <CirclePlus />
                    </div>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-md mx-auto rounded-t-3xl">
                <VisuallyHidden>
                    <DrawerTitle>{t("add_item")}</DrawerTitle>
                    <DrawerDescription>{t("add_item")}</DrawerDescription>
                </VisuallyHidden>
                <DrawerContentComponent form={form} onSubmit={onSubmit} />
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
