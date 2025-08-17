import { UseFormReturn } from "react-hook-form";
import { CustomerReviewSchemaForm } from "./index";
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { useTranslations } from "next-intl";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";
import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";
import DrawerCustomerReviewForm from "@/components/CustomerReview/DrawerCustomerReviewForm";

export type DrawerCustomerReviewProps = {
    form: UseFormReturn<CustomerReviewSchemaForm>;
    onSubmit: (values: CustomerReviewSchemaForm) => void;
};
const DrawerCustomerReview = ({ form, onSubmit }: DrawerCustomerReviewProps) => {
    const t = useTranslations("CustomerReview");
    const isOpenDrawer = useCustomerReview((state) => state.isOpenDrawer);
    const openDrawer = useCustomerReview((state) => state.openDrawer);
    const closeDrawer = useCustomerReview((state) => state.closeDrawer);

    const handleOpenChange = (open: boolean) => {
        if (open) {
            openDrawer();
        } else {
            closeDrawer();
        }
    };

    return (
        <Drawer open={isOpenDrawer} onOpenChange={handleOpenChange}>
            <DrawerTrigger asChild>
                <Button variant="secondary" className="w-full p-5 capitalize text-xl font-semibold">
                    <div className="py-2 flex items-center justify-center gap-x-3">
                        {t("review")}
                        <ScrollText />
                    </div>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-md mx-auto rounded-t-3xl px-4">
                <VisuallyHidden>
                    <DrawerTitle>{t("add_review")}</DrawerTitle>
                    <DrawerDescription>{t("add_review")}</DrawerDescription>
                </VisuallyHidden>
                <DrawerCustomerReviewForm form={form} onSubmit={onSubmit} />
            </DrawerContent>
        </Drawer>
    );
};
export default DrawerCustomerReview;
