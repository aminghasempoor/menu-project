import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";
import { DialogCustomerReviewProps } from "@/components/CustomerReview/DialogCustomerReview";
import { useTranslations } from "next-intl";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";

const DrawerCustomerReviewForm = ({ form, onSubmit }: DialogCustomerReviewProps) => {
    const t = useTranslations("CustomerReview");
    const closeDrawer = useCustomerReview((state) => state.closeDrawer);
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <div>
                    <div>
                        <Label>{t("stars")}</Label>
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
                    <div>
                        <Label>{t("description")}</Label>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            value={field.value}
                                            placeholder={t("description")}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <Button type="submit" className={"w-full mb-5"} disabled={form.formState.isSubmitting}>
                        {t("submit")}
                    </Button>
                    <Button
                        onClick={() => {
                            closeDrawer();
                        }}
                        type="button"
                        variant={"outline"}
                        className={"w-full mb-5"}
                    >
                        {t("close")}
                    </Button>
                </div>
            </form>
        </Form>
    );
};
export default DrawerCustomerReviewForm;
