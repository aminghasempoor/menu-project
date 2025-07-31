import { DrawerFooter } from "@/components/ui/drawer";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AddCategoryFormValues } from "./AddCategory";
import { UseFormReturn } from "react-hook-form";
import { DELETE_CATEGORY } from "@/lib/utils/apiRoutes";
import useRequest from "@/lib/hooks/useRequest";
import { useEditCategoryStore } from "@/lib/utils/useEditCategoryStore";
import useCategories from "@/lib/hooks/useCategories";

type DialogContentComponentProps = {
    form: UseFormReturn<AddCategoryFormValues>;
    onSubmit: (values: AddCategoryFormValues) => void;
    isEdit?: boolean;
};

export default function DrawerContentComponent({ form, onSubmit, isEdit }: DialogContentComponentProps) {
    const t = useTranslations("Categories");
    const requestServer = useRequest({ notification: true, auth: true });
    const deleteID = useEditCategoryStore((state) => state.id);
    const isLoadingData = useEditCategoryStore((state) => state.isLoadingData);
    const { mutateCategories } = useCategories();
    const setLoadingData = useEditCategoryStore((state) => state.setLoadingData);
    const handleDelete = async () => {
        setLoadingData(true);
        try {
            const response = await requestServer(`${DELETE_CATEGORY}/${deleteID}`, "delete", {
                success: {
                    notification: { show: true },
                },
            });
            console.log(response);
            mutateCategories();
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingData(false);
        }
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="gap-4 py-3 px-10">
                    {/*<div>*/}
                    {/*    <Label>{t("upload_image")}</Label>*/}
                    {/*    <FormField*/}
                    {/*        control={form.control}*/}
                    {/*        name="image"*/}
                    {/*        render={({ field }) => (*/}
                    {/*            <FormItem className={"border rounded-xl"}>*/}
                    {/*                <FormControl>*/}
                    {/*                    <ImageUpload value={field.value} onChange={field.onChange} />*/}
                    {/*                </FormControl>*/}
                    {/*                <FormMessage className={"px-2"} />*/}
                    {/*            </FormItem>*/}
                    {/*        )}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div>
                        <Label>{t("name")}</Label>
                        <FormField
                            control={form.control}
                            name="name_fa"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input value={field.value} placeholder={t("name")} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <DrawerFooter className={"pb-2"}>
                    {isEdit && (
                        <Button
                            onClick={handleDelete}
                            className="capitalize text-md mx-4 font-semibold bg-red-600/75 hover:bg-red-600 "
                            id={"delete_item"}
                            disabled={isLoadingData}
                        >
                            {t("delete_item")}
                        </Button>
                    )}
                    <Button disabled={isLoadingData} className="capitalize text-md font-semibold mx-4" type="submit">
                        {t("add_item")}
                    </Button>
                </DrawerFooter>
            </form>
        </Form>
    );
}
