"use client";
import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCategorySchema } from "@/lib/utils/schemas";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { GET_EDIT_ITEM } from "@/lib/utils/apiRoutes";
import useRequest from "@/lib/hooks/useRequest";
import dynamic from "next/dynamic";
import { useEditCategoryStore } from "@/lib/utils/useEditCategoryStore";

const DialogContentController = dynamic(() => import("./DialogContentController"), {
    ssr: false,
});

const DrawerContentController = dynamic(() => import("./DrawerContentController"), {
    ssr: false,
});
export type EditItemFormValues = z.infer<ReturnType<typeof addCategorySchema>>;

export interface EditItemProps {
    // image: string | File;
    name_fa: string;
    id?: number;
}

export function EditItem({ data }: { data: EditItemProps }) {
    const t = useTranslations("Categories");
    const requestServer = useRequest({ notification: true, auth: true });
    const editID = useEditCategoryStore((state) => state.id);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const setLoadingData = useEditCategoryStore((state) => state.setLoadingData);
    const schema = addCategorySchema(t);
    type EditItemFormValues = z.infer<typeof schema>;

    const form = useForm<EditItemFormValues>({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues: {
            name_fa: data.name_fa || "",
            // image: data.image || undefined,
        },
    });

    async function onSubmit(values: EditItemFormValues) {
        setLoadingData(true);
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            if (typeof value === "boolean") {
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
