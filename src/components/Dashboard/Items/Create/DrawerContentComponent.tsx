import { DrawerFooter } from "@/components/ui/drawer";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import ImageUpload from "@/components/Dashboard/Items/ImageUpload";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { DialogContentComponentProps } from "./DrawerContentController";

export default function DrawerContentComponent({ form, onSubmit }: DialogContentComponentProps) {
    const t = useTranslations("Items");
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className={"max-h-[650px] overflow-y-scroll"}>
                    <div className="flex flex-col gap-4 py-1 px-5">
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
                    <div className="flex flex-col gap-2 px-5">
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
                                                rows={1}
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
                                                    <SelectItem value="1">دسته ۱</SelectItem>
                                                    <SelectItem value="2">دسته ۲</SelectItem>
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
                <DrawerFooter className={"pb-0"}>
                    <Button className="capitalize text-md font-semibold" type="submit">
                        {t("add_item")}
                    </Button>
                </DrawerFooter>
            </form>
        </Form>
    );
}
