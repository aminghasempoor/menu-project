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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import ImageUpload from "@/components/Dashboard/Items/ImageUpload ";
import { DialogContentComponentProps } from "./AddItem";

export function DialogContentComponent({form, onSubmit} : DialogContentComponentProps) {
    const t = useTranslations("Items");

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
            <DialogContent className="sm:max-w-[900px]">
                <VisuallyHidden>
                    <DialogTitle>{t("add_item")}</DialogTitle>
                    <DialogDescription>{t("add_item")}</DialogDescription>
                </VisuallyHidden>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-4 py-3 px-10">
                                <div className="border rounded-xl">
                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-medium text-muted-foreground">
                                                    {t("upload_image")}
                                                </FormLabel>
                                                <FormControl>
                                                    <ImageUpload value={field.value} onChange={field.onChange} />
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
                            <div className="md:col-span-2 flex flex-col gap-4 py-3 px-10">
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
