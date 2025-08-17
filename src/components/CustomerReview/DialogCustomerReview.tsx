import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { CustomerReviewSchemaForm } from "./index";
import DialogCustomerReviewForm from "./DialogCustomerReviewForm";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";

export type DialogCustomerReviewProps = {
    form: UseFormReturn<CustomerReviewSchemaForm>;
    onSubmit: (values: CustomerReviewSchemaForm) => void;
};
const DialogCustomerReview = ({ form, onSubmit }: DialogCustomerReviewProps) => {
    const t = useTranslations("CustomerReview");
    const isOpenDialog = useCustomerReview((state) => state.isOpenDialog);
    const openDialog = useCustomerReview((state) => state.openDialog);
    const closeDialog = useCustomerReview((state) => state.closeDialog);

    const handleOpenChange = (open: boolean) => {
        if (open) {
            openDialog();
        } else {
            closeDialog();
        }
    };

    return (
        <Dialog open={isOpenDialog} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className="w-full p-5 flex items-center justify-center capitalize text-xl font-semibold"
                >
                    <div className="py-4 px-2 flex items-center justify-center gap-x-3">
                        {t("review")}
                        <ScrollText />
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] px-2 overflow-y-auto">
                <VisuallyHidden>
                    <DialogTitle>{t("add_review")}</DialogTitle>
                    <DialogDescription>{t("add_review")}</DialogDescription>
                </VisuallyHidden>
                <DialogTitle className={"pt-5 text-center text-xl"}>{t("customer_review")}</DialogTitle>
                <DialogCustomerReviewForm form={form} onSubmit={onSubmit} />
            </DialogContent>
        </Dialog>
    );
};
export default DialogCustomerReview;
