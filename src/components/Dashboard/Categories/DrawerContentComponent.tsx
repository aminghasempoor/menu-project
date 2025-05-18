import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { useTranslations } from "next-intl";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import ImageUpload from "@/components/Dashboard/Items/ImageUpload";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AddCategoryFormValues } from "./AddCategory";
import { UseFormReturn } from "react-hook-form";

type DialogContentComponentProps = {
    form: UseFormReturn<AddCategoryFormValues>;
    onSubmit: (values: AddCategoryFormValues) => void;
};

export default function DrawerContentComponent({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Categories");
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant="secondary"
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 capitalize text-xl font-semibold"
                >
                    <div className={"py-2 flex items-center justify-center gap-x-3"}>
                        {t("add_item")}
                        <CirclePlus />
                    </div>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-md mx-auto rounded-t-3xl pb-6">
                <VisuallyHidden>
                    <DrawerTitle>{t("add_item")}</DrawerTitle>
                    <DrawerDescription>{t("add_item")}</DrawerDescription>
                </VisuallyHidden>
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
                                    name="name"
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
                            <Button className="capitalize text-md font-semibold" type="submit">
                                {t("add_item")}
                            </Button>
                        </DrawerFooter>
                    </form>
                </Form>
            </DrawerContent>
        </Drawer>
    );
}
