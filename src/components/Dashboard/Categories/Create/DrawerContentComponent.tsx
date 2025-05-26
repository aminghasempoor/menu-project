import { DrawerFooter } from "@/components/ui/drawer";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import ImageUpload from "@/components/Dashboard/Items/ImageUpload";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AddCategoryFormValues } from "./AddCategory";
import { UseFormReturn } from "react-hook-form";

type DialogContentComponentProps = {
    form: UseFormReturn<AddCategoryFormValues>;
    onSubmit: (values: AddCategoryFormValues) => void;
    isEdit?: boolean;
};

export default function DrawerContentComponent({ form, onSubmit, isEdit }: DialogContentComponentProps) {
    const t = useTranslations("Categories");
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="gap-4 py-3 px-10">
                    <div>
                        <Label>{t("upload_image")}</Label>
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem className={"border rounded-xl"}>
                                    <FormControl>
                                        <ImageUpload value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage className={"px-2"} />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <Label>{t("name")}</Label>
                        <FormField
                            control={form.control}
                            name="name_fa"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder={t("name")} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <DrawerFooter>
                    {isEdit && <Button>hello</Button>}
                    <Button className="capitalize text-md font-semibold" type="submit">
                        {t("add_item")}
                    </Button>
                </DrawerFooter>
            </form>
        </Form>
    );
}
