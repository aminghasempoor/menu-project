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
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CirclePlus } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addItemSchema } from "@/lib/utils/schemas";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";

type addItemSchema = z.infer<ReturnType<typeof addItemSchema>>;

export function DialogContentComponent() {
    const t = useTranslations("Items");
    const form = useForm({
        resolver: zodResolver(addItemSchema(t)),
        mode: "all",
        defaultValues: {
            name: "",
            price: "",
            ingredients: "",
            description: "",
            is_recommended: false,
            image: "",
            category_id: "",
        },
    });

    async function onSubmit(values: addItemSchema) {
        console.log(values);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 capitalize text-xl font-semibold"
                >
                    <div className="py-4 px-2 flex items-center justify-center gap-x-3">
                        {t("add_item")}
                        <CirclePlus />
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px]">
                <VisuallyHidden>
                    <DialogTitle>{t("add_item")}</DialogTitle>
                    <DialogDescription>{t("add_item")}</DialogDescription>
                </VisuallyHidden>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-4 py-3 px-10">
                            <div className="aspect-square bg-muted rounded-md flex justify-center items-center relative overflow-hidden">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                                    placeholder={t("upload_image")}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <Label>{t("price")}</Label>
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder={t("hezar_toman")} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="md:col-span-2 flex flex-col gap-4 py-3 px-10">
                            <div>
                                <Label>{t("ingredient")}</Label>
                                <FormField
                                    control={form.control}
                                    name="ingredients"
                                    render={({}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder={t("ingredient")} />
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
                                    render={({}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea rows={6} placeholder={t("description")} />
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
                                    render={({}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Select>
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
                                    render={({}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Switch id="featured" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Label htmlFor="featured">{t("set_recommended")}</Label>
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
