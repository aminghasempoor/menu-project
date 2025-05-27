import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { useTranslations } from "next-intl";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AddCategoryFormValues } from "./AddCategory";
import { UseFormReturn } from "react-hook-form";
import DrawerContentComponent from "./DrawerContentComponent";
import { useEditCategoryStore } from "@/lib/utils/useEditCategoryStore";

type DialogContentComponentProps = {
    form: UseFormReturn<AddCategoryFormValues>;
    onSubmit: (values: AddCategoryFormValues) => void;
};

export default function DrawerContentController({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Categories");
    const closeEditDialog = useEditCategoryStore((state) => state.closeEditDialog);
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
                <DrawerFooter className={"mx-4 pt-0"}>
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
