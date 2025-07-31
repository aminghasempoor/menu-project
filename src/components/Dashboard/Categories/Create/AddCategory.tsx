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
import useCategories from "@/lib/hooks/useCategories";

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
    const { mutateCategories } = useCategories();

    const setLoadingData = useEditCategoryStore((state) => state.setLoadingData);

    const schema = addCategorySchema(t);
    type AddCategoryFormValues = z.infer<typeof schema>;

    const form = useForm<AddCategoryFormValues>({
        resolver: zodResolver(schema),
        mode: "all",
        defaultValues: {
            name_fa: "",
            menu_type: localStorage.getItem("menu_type"),
            // image: undefined,
        },
    });

    async function onSubmit(values: AddCategoryFormValues) {
        setLoadingData(true);
        console.log(values);
        try {
            const response = (await requestServer(CREATE_CATEGORIES, "post", {
                data: {
                    name_fa: values.name_fa,
                    menu_type: `${values.menu_type}`,
                },
                success: {
                    notification: { show: true },
                },
            })) as { data: { data: { token: string } } };
            console.log(response);
            mutateCategories();
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
