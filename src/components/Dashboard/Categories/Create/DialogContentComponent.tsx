import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { useTranslations } from "next-intl";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { AddCategoryFormValues } from "./AddCategory";
import useRequest from "@/lib/hooks/useRequest";
import { useEditCategoryStore } from "@/lib/utils/useEditCategoryStore";
import { DELETE_CATEGORY } from "@/lib/utils/apiRoutes";
import useCategories from "@/lib/hooks/useCategories";

type DialogContentComponentProps = {
    form: UseFormReturn<AddCategoryFormValues>;
    onSubmit: (values: AddCategoryFormValues) => void;
    isEdit?: boolean;
};

export default function DialogContentComponent({ form, onSubmit, isEdit }: DialogContentComponentProps) {
    const t = useTranslations("Categories");
    const requestServer = useRequest({ notification: true, auth: true });
    const deleteID = useEditCategoryStore((state) => state.id);
    const { mutateCategories } = useCategories();
    const isLoadingData = useEditCategoryStore((state) => state.isLoadingData);
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
                <div className=" w-full items-center justify-around gap-4 py-3 px-5">
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
                <DialogFooter className={"items-start px-5 py-2"}>
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
                    <Button disabled={isLoadingData} className="capitalize text-md font-semibold" type="submit">
                        {isEdit ? t("edit") : t("add_item")}
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    );
}
