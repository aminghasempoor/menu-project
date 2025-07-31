"use client";
import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addItemSchema } from "@/lib/utils/schemas";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { GET_EDIT_ITEM } from "@/lib/utils/apiRoutes";
import useRequest from "@/lib/hooks/useRequest";
import dynamic from "next/dynamic";
import { useEditItemStore } from "@/lib/utils/useEditItemStore";
import useFoods from "@/lib/hooks/useFoods";

const DialogContentController = dynamic(() => import("./DialogContentController"), {
    ssr: false,
});

const DrawerContentController = dynamic(() => import("./DrawerContentController"), {
    ssr: false,
});
export type EditItemFormValues = z.infer<ReturnType<typeof addItemSchema>>;

export interface EditItemProps {
    id?: number;
    name_fa: string;
    price: string;
    ingredients: string;
    description: string;
    menu_type: string;
    is_recommended: boolean;
    image: string | File;
    category_id: string;
}

export function EditItem({ data }: { data: EditItemProps }) {
    const t = useTranslations("Items");
    const requestServer = useRequest({ notification: true, auth: true });
    const editID = useEditItemStore((state) => state.id);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const setLoadingData = useEditItemStore((state) => state.setLoadingData);
    const schema = addItemSchema(t);
    type EditItemFormValues = z.infer<typeof schema>;
    const { mutateFoods } = useFoods();

    const form = useForm<EditItemFormValues>({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues: {
            name_fa: data.name_fa || "",
            price: data.price || "",
            ingredients: data.ingredients || "",
            description: data.description || "",
            is_recommended: data.is_recommended || false,
            image: data.image || undefined,
            menu_type: localStorage.getItem("menu_type"),
            category_id: String(data.category_id) || "",
        },
    });

    async function onSubmit(values: EditItemFormValues) {
        setLoadingData(true);
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (key === "image") {
                if (value instanceof File && value.name !== data.image) {
                    formData.append("image", value);
                }
            } else if (typeof value === "boolean") {
                formData.append(key, value ? "1" : "0");
            } else if (value !== undefined && value !== null) {
                formData.append(key, value);
            }
        });

        try {
            const response = await requestServer(`${GET_EDIT_ITEM}/${editID}`, "post", {
                data: formData,
                success: {
                    notification: { show: true },
                },
            });
            console.log(response);
            mutateFoods();
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingData(false);
        }
    }

    if (isDesktop) {
        return <DialogContentController form={form} onSubmit={onSubmit} />;
    }

    return <DrawerContentController form={form} onSubmit={onSubmit} />;
}
