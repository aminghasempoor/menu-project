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
import { DELETE_ITEM } from "@/lib/utils/apiRoutes";
import useRequest from "@/lib/hooks/useRequest";
import { useEditItemStore } from "@/lib/utils/useEditItemStore";
import useFoods from "@/lib/hooks/useFoods";
import useCategories from "@/lib/hooks/useCategories";
import { Skeleton } from "@/components/ui/skeleton";

export default function DrawerContentComponent({ form, onSubmit, isEdit }: DialogContentComponentProps) {
    const t = useTranslations("Items");
    const requestServer = useRequest({ notification: true, auth: true });
    const { mutateFoods } = useFoods();
    const { categories, loadingCategories, errorCategories } = useCategories();
    const deleteID = useEditItemStore((state) => state.id);
    const handleDelete = async () => {
        try {
            const response = await requestServer(`${DELETE_ITEM}/${deleteID}`, "delete", {
                success: {
                    notification: { show: true },
                },
            });
            console.log(response);
            mutateFoods();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className={"max-h-[500px] overflow-y-scroll"}>
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
                                            <Input
                                                value={field.value}
                                                placeholder={t("hezar_toman")}
                                                onChange={field.onChange}
                                            />
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
                                name="name_fa"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                value={field.value}
                                                placeholder={t("name")}
                                                onChange={field.onChange}
                                            />
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
                                            <Input
                                                value={field.value}
                                                placeholder={t("ingredient")}
                                                onChange={field.onChange}
                                            />
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
                                                value={field.value}
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
                                            <Select value={field.value} onValueChange={field.onChange}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t("choose")} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {loadingCategories ? (
                                                        <div>
                                                            <Skeleton className={"w-[100px] h-2 my-2"} />
                                                            <Skeleton className={"w-[100px] h-2 my-2"} />
                                                            <Skeleton className={"w-[100px] h-2 my-2"} />
                                                            <Skeleton className={"w-[100px] h-2 my-2"} />
                                                        </div>
                                                    ) : errorCategories ? (
                                                        <p className="text-red-500">{errorCategories}</p>
                                                    ) : (
                                                        categories.map((category) => (
                                                            <SelectItem key={category.id} value={`${category.id}`}>
                                                                {category.name_fa}
                                                            </SelectItem>
                                                        ))
                                                    )}
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
                                            <Switch
                                                checked={field.value}
                                                id="featured"
                                                onCheckedChange={field.onChange}
                                            />
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
                        {isEdit ? t("edit") : t("add_item")}
                    </Button>
                    {isEdit && (
                        <Button
                            onClick={handleDelete}
                            className="capitalize text-md font-semibold bg-red-600/75 hover:text-red-600 "
                            id={"delete_item"}
                        >
                            {t("delete_item")}
                        </Button>
                    )}
                </DrawerFooter>
            </form>
        </Form>
    );
}
