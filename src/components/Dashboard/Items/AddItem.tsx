import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DialogContentComponent } from "./DialogContentComponent";
import { DrawerContentComponent } from "./DrawerContentComponent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addItemSchema } from "@/lib/utils/schemas";
import { useTranslations } from "next-intl";
import { z } from "zod";
export type AddItemFormValues = z.infer<ReturnType<typeof addItemSchema>>;

export function AddItem() {
    const t = useTranslations("Items");
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const schema = addItemSchema(t);
    type AddItemFormValues = z.infer<typeof schema>;

    const form = useForm<AddItemFormValues>({
        resolver: zodResolver(schema),
        mode: "all",
        defaultValues: {
            name: "",
            price: "",
            ingredients: "",
            description: "",
            is_recommended: false,
            image: null,
            category_id: "",
        },
    });

    async function onSubmit(values: AddItemFormValues) {
        console.log(values);
    }

    if (isDesktop) {
        return <DialogContentComponent form={form} onSubmit={onSubmit} />;
    }

    return <DrawerContentComponent form={form} onSubmit={onSubmit} />;
}
