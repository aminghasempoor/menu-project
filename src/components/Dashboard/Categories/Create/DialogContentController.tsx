import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { UseFormReturn } from "react-hook-form";
import { AddCategoryFormValues } from "./AddCategory";
import DialogContentComponent from "./DialogContentComponent";

type DialogContentComponentProps = {
    form: UseFormReturn<AddCategoryFormValues>;
    onSubmit: (values: AddCategoryFormValues) => void;
    isEdit?: boolean;
};

export default function DialogContentController({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Categories");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 capitalize text-xl font-semibold"
                >
                    <div className="py-4 px-2 flex items-center justify-center gap-x-3">
                        {t("add_item")}
                        <CirclePlus />
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <VisuallyHidden>
                    <DialogTitle>{t("add_item")}</DialogTitle>
                    <DialogDescription>{t("add_item")}</DialogDescription>
                </VisuallyHidden>
                <DialogContentComponent form={form} onSubmit={onSubmit} />
            </DialogContent>
        </Dialog>
    );
}
