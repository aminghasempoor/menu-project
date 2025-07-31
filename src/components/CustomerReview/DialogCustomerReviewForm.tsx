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
                    <div className={"flex gap-x-5 w-full items-center"}>
                        <FormField
                            control={form.control}
                            name="stars"
                            render={({ field }) => (
                                <FormItem>
                                    <Label className="block text-center mb-1 text-sm font-medium text-zinc-700">
                                        {t("stars")}
                                    </Label>
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
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder={t("description")}
                                            className="min-h-[50px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="text-left flex gap-5 justify-end">
                        <Button variant={"outline"} onClick={() => {
                            closeDialog();
                        }} type="button">
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
