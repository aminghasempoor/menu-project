"use client";
import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DialogContentComponent } from "./DialogContentComponent";
import { DrawerContentComponent } from "./DrawerContentComponent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addItemSchema } from "@/lib/utils/schemas";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { CREATE_ITEM } from "@/lib/utils/apiRoutes";
import useRequest from "@/lib/hooks/useRequest";
export type AddItemFormValues = z.infer<ReturnType<typeof addItemSchema>>;

export function Create() {
    const t = useTranslations("Items");
    const requestServer = useRequest({ notification: true, auth: true });
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
            image: undefined,
            category_id: "",
        },
    });

    async function onSubmit(values: AddItemFormValues) {
        console.log(values);
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            if (value instanceof File) {
                formData.append(key, value);
            } else if (typeof value === "boolean") {
                formData.append(key, value ? "1" : "0");
            } else if (value !== undefined && value !== null) {
                formData.append(key, value);
            }
        });
        try {
            const response = (await requestServer(CREATE_ITEM, "post", {
                data: formData,
                success: {
                    notification: { show: true },
                },
            })) as { data: { data: { token: string } } };
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    if (isDesktop) {
        return <DialogContentComponent form={form} onSubmit={onSubmit} />;
    }

    return <DrawerContentComponent form={form} onSubmit={onSubmit} />;
}
