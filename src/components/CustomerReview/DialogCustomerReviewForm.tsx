import { DialogCustomerReviewProps } from "./DialogCustomerReview";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import React from "react";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";

const DialogCustomerReviewForm = ({ form, onSubmit }: DialogCustomerReviewProps) => {
    const t = useTranslations("CustomerReview");
    const closeDialog = useCustomerReview((state) => state.closeDialog);

    return (
        <div className="p-2 border rounded-lg shadow-sm">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                        {/* Textarea سمت چپ */}
                        <div className="w-full md:w-3/4">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder={t("description")}
                                                className="min-h-[100px]"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* ستاره‌ها + عنوان سمت راست */}
                        <div className="w-full md:w-1/4 flex flex-col items-center justify-center gap-2">
                            <Label className="text-base font-bold text-center w-full">{t("stars")}</Label>
                            <FormField
                                control={form.control}
                                name="stars"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-6 h-6 cursor-pointer transition ${
                                                            i <= Number(field.value)
                                                                ? "text-yellow-400 fill-yellow-400"
                                                                : "text-gray-300"
                                                        }`}
                                                        onClick={() => field.onChange(i)}
                                                    />
                                                ))}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* دکمه‌ها */}
                    <div className="text-left flex gap-5 justify-end">
                        <Button variant={"outline"} type="button" onClick={closeDialog}>
                            {t("close")}
                        </Button>
                        <Button type="submit" disabled={form.formState.isSubmitting}>
                            {t("submit")}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
export default DialogCustomerReviewForm;
