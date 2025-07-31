"use client";

import { useTranslations } from "next-intl";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";
import { Skeleton } from "@/components/ui/skeleton";
import { useCustomerReviewData } from "@/hooks/useGetRating";
import { AlertCircle, Star } from "lucide-react";

const DialogCustomerReviewContent = () => {
    useCustomerReviewData();
    const t = useTranslations("CustomerReview");

    const ratings = useCustomerReview((state) => state.ratings);
    const isLoadingData = useCustomerReview((state) => state.isLoadingData);
    const error = useCustomerReview((state) => state.error);
    if (isLoadingData) {
        return (
            <div className="flex items-center justify-center py-6 space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center text-red-500 py-8">
                <AlertCircle className="w-10 h-10 mb-2" />
                <p>{t("error_loading_data")}</p>
            </div>
        );
    }

    return (
        <div className="w-full pt-5 h-[200px] overflow-y-auto">
            {ratings.length === 0 ? (
                <p className="text-center text-muted-foreground my-4">{t("no_data")}</p>
            ) : (
                <div className="space-y-4">
                    {ratings.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4 shadow-sm bg-white flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <p className="font-medium text-zinc-800">{item.customer_name}</p>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${
                                                i < item.stars ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                            fill={i < item.stars ? "#facc15" : "none"}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DialogCustomerReviewContent;
