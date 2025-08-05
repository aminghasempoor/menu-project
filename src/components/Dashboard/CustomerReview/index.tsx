"use client";
import { useTranslations } from "next-intl";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useCustomerReviewData } from "@/hooks/useGetRating";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
            ease: "easeOut",
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const CustomerReviewComponent = () => {
    useCustomerReviewData();
    const t = useTranslations("CustomerReview");
    const ratings = useCustomerReview((state) => state.ratings);
    const isLoadingData = useCustomerReview((state) => state.isLoadingData);
    const error = useCustomerReview((state) => state.error);

    return (
        <>
            <h1 className="text-center text-xl scroll-m-20 sm:text-2xl font-bold tracking-tight capitalize py-3">
                {t("review")}
            </h1>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {isLoadingData ? (
                    [...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center py-6 gap-x-4 border rounded-lg shadow animate-pulse bg-gray-50"
                        >
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2 flex-1">
                                <Skeleton className="h-4 w-[80%]" />
                                <Skeleton className="h-4 w-[60%]" />
                            </div>
                        </div>
                    ))
                ) : error ? (
                    <div className="flex flex-col items-center justify-center text-red-500 py-8 col-span-full">
                        <AlertCircle className="w-10 h-10 mb-2" />
                        <p>{t("error_loading_data")}</p>
                    </div>
                ) : (
                    ratings.map((rating, index: number) => (
                        <motion.div
                            key={rating.id}
                            variants={itemVariants}
                            className="flex flex-col border rounded-lg shadow p-4 bg-card"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-semibold text-lg select-none">
                                    {rating.customer_name
                                        ? rating.customer_name[0]
                                        : rating.username[0]}
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        {rating.customer_name || rating.username}
                                    </p>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < rating.stars
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                                {rating.description}
                            </p>
                        </motion.div>
                    ))
                )}
            </motion.div>
        </>
    );
};

export default CustomerReviewComponent;
