import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CirclePlus, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { CustomerReviewSchemaForm } from "./index";
import DialogCustomerReviewContent from "./DialogCustomerReviewContent";
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
    return (
        <Dialog open={isOpenDialog} onOpenChange={openDialog}>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className="w-full p-5 flex items-center justify-center capitalize text-xl font-semibold"
                >
                    <div className="py-4 px-2 flex items-center justify-center gap-x-3">
                        {t("add_review")}
                        <CirclePlus />
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] px-2 overflow-y-auto">
                <DialogClose asChild>
                    <X size={20} className={"absolute top-2 end-2 cursor-pointer"} />
                </DialogClose>
                <VisuallyHidden>
                    <DialogTitle>{t("add_review")}</DialogTitle>
                    <DialogDescription>{t("add_review")}</DialogDescription>
                </VisuallyHidden>
                <DialogTitle className={"pt-5 text-center text-xl"}>{t("customer_review")}</DialogTitle>
                <DialogCustomerReviewContent />
                <DialogCustomerReviewForm form={form} onSubmit={onSubmit} />
            </DialogContent>
        </Dialog>
    );
};
export default DialogCustomerReview;
