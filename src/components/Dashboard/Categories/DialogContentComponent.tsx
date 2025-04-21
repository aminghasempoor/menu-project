import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import ImageUpload from "@/components/Dashboard/Items/ImageUpload ";
import { UseFormReturn } from "react-hook-form";
import { AddCategoryFormValues } from "./AddCategory";

type DialogContentComponentProps = {
    form: UseFormReturn<AddCategoryFormValues>;
    onSubmit: (values: AddCategoryFormValues) => void;
};

export function DialogContentComponent({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Categories");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 capitalize text-xl font-semibold"
                >
                    <div className="py-4 px-2 flex items-center justify-center gap-x-3">
                        {t("add_item")}
                        <CirclePlus />
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <VisuallyHidden>
                    <DialogTitle>{t("add_item")}</DialogTitle>
                    <DialogDescription>{t("add_item")}</DialogDescription>
                </VisuallyHidden>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex w-full items-center justify-around gap-4 py-3 px-10">
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
                        <DialogFooter className={"items-start"}>
                            <Button className="capitalize text-md font-semibold" type="submit">
                                {t("add_item")}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
