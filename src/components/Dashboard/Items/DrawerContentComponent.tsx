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
import ImageUpload from "@/components/Dashboard/Items/ImageUpload ";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { AddItemFormValues } from "./AddItem";
import { UseFormReturn } from "react-hook-form";
type DialogContentComponentProps = {
    form: UseFormReturn<AddItemFormValues>;
    onSubmit: (values: AddItemFormValues) => void;
};

export function DrawerContentComponent({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Items");
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
                        <div className="">
                            <div className="flex flex-col gap-4 py-3 px-10">
                                <div>
                                    <Label>{t("upload_image")}</Label>
                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({ field }) => (
                                            <FormItem className={"border rounded-xl"}>
                                                {/*<FormLabel className="text-sm font-medium text-muted-foreground">*/}
                                                {/*    {t("upload_image")}*/}
                                                {/*</FormLabel>*/}
                                                <FormControl>
                                                    <ImageUpload value={field.value} onChange={field.onChange} />
                                                </FormControl>
                                                <FormMessage className={"px-2"} />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Label>{t("price")}</Label>
                                    <FormField
                                        control={form.control}
                                        name="price"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder={t("hezar_toman")} onChange={field.onChange} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 px-10">
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
                                <div>
                                    <Label>{t("ingredient")}</Label>
                                    <FormField
                                        control={form.control}
                                        name="ingredients"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder={t("ingredient")} onChange={field.onChange} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Textarea
                                                        rows={6}
                                                        placeholder={t("description")}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Label>{t("choose_category")}</Label>
                                    <FormField
                                        control={form.control}
                                        name="category_id"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder={t("choose")} />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cat1">دسته ۱</SelectItem>
                                                            <SelectItem value="cat2">دسته ۲</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <FormField
                                        control={form.control}
                                        name="is_recommended"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Switch id="featured" onCheckedChange={field.onChange} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Label htmlFor="featured">{t("set_recommended")}</Label>
                                </div>
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
