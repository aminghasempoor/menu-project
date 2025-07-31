import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/use-media-query";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerReviewSchema } from "@/lib/utils/schemas";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { CREATE_ITEM } from "@/lib/utils/apiRoutes";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";
import useRequest from "@/lib/hooks/useRequest";
import { useCustomerReviewData } from "@/hooks/useGetRating";
import { SkeletonCard } from "@/core/SkeletonCard";
export type CustomerReviewSchemaForm = z.infer<ReturnType<typeof CustomerReviewSchema>>;

const DialogCustomerReview = dynamic(() => import("./DialogCustomerReview"), {
    ssr: false,
});

const DrawerCustomerReview = dynamic(() => import("./DrawerCustomerReview"), {
    ssr: false,
});

const CustomerReview = () => {
    const t = useTranslations("CustomerReview");
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const schema = CustomerReviewSchema(t);
    useCustomerReviewData();
    const requestServer = useRequest({ notification: true, auth: true });
    const setLoadingData = useCustomerReview((state) => state.setLoadingData);
    type CustomerReviewSchemaForm = z.infer<typeof schema>;
    const form = useForm<CustomerReviewSchemaForm>({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: {
            star: "",
            text: "",
        },
    });

    async function onSubmit(values: CustomerReviewSchemaForm) {
        console.log(values);
        // setLoadingData(true);
        // const formData = new FormData();

        // try {
        //     const response = (await requestServer(CREATE_ITEM, "post", {
        //         data: formData,
        //         success: {
        //             notification: { show: true },
        //         },
        //     })) as { data: { data: { token: string } } };
        //     console.log(response);
        // } catch (error) {
        //     console.log(error);
        // } finally {
        //     setLoadingData(false);
        // }
    }

    if (isDesktop) {
        return <DialogCustomerReview form={form} onSubmit={onSubmit} />;
    }

    return <DrawerCustomerReview form={form} onSubmit={onSubmit} />;
};
export default CustomerReview;
