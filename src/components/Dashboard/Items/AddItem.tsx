import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DialogContentComponent } from "./DialogContentComponent";
import { DrawerContentComponent } from "./DrawerContentComponent";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addItemSchema } from "@/lib/utils/schemas";
import { useTranslations } from "next-intl";
import { z } from "zod";
type addItemSchema = z.infer<ReturnType<typeof addItemSchema>>;
export interface DialogContentComponentProps {
    form: UseFormReturn<addItemSchema>;
    onSubmit: (values: addItemSchema) => void;
}

export function AddItem() {
    const t = useTranslations("Items");
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const form = useForm({
        resolver: zodResolver(addItemSchema(t)),
        mode: "all",
        defaultValues: {
            name: "",
            price: "",
            ingredients: "",
            description: "",
            is_recommended: false,
            image: "",
            category_id: "",
        },
    });

    async function onSubmit(values: addItemSchema) {
        console.log(values);
    }

    if (isDesktop) {
        return <DialogContentComponent form={form} onSubmit={onSubmit} />;
    }

    return <DrawerContentComponent form={form} onSubmit={onSubmit} />;
}
