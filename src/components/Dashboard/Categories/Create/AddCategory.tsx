"use client";
import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCategorySchema } from "@/lib/utils/schemas";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { CREATE_CATEGORIES } from "@/lib/utils/apiRoutes";
import useRequest from "@/lib/hooks/useRequest";
import dynamic from "next/dynamic";
import { useEditCategoryStore } from "@/lib/utils/useEditCategoryStore";

const DialogContentController = dynamic(() => import("./DialogContentController"), {
    ssr: false,
});

const DrawerContentController = dynamic(() => import("./DrawerContentController"), {
    ssr: false,
});
export type AddCategoryFormValues = z.infer<ReturnType<typeof addCategorySchema>>;

export function AddCategory() {
    const t = useTranslations("Categories");
    const requestServer = useRequest({ notification: true, auth: true });
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const setLoadingData = useEditCategoryStore((state) => state.setLoadingData);

    const schema = addCategorySchema(t);
    type AddCategoryFormValues = z.infer<typeof schema>;

    const form = useForm<AddCategoryFormValues>({
        resolver: zodResolver(schema),
        mode: "all",
        defaultValues: {
            name_fa: "",
            // image: undefined,
        },
    });

    async function onSubmit(values: AddCategoryFormValues) {
        setLoadingData(true)
        console.log(values);
        const formData = new FormData();
        formData.append("name_fa", values.name_fa);
        // formData.append("image", values.image);
        try {
            const response = (await requestServer(CREATE_CATEGORIES, "post", {
                data: formData,
                success: {
                    notification: { show: true },
                },
            })) as { data: { data: { token: string } } };
            console.log(response);
        } catch (error) {
            console.log(error);
        }finally {
            setLoadingData(false)
        }
    }

    if (isDesktop) {
        return <DialogContentController form={form} onSubmit={onSubmit} />;
    }

    return <DrawerContentController form={form} onSubmit={onSubmit} />;
}
