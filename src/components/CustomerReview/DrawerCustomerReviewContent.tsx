import { useTranslations } from "next-intl";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";
import { Skeleton } from "@/components/ui/skeleton";

const DrawerCustomerReviewContent = () => {
    const t = useTranslations("CustomerReview")
    const ratings = useCustomerReview((state) => state.ratings)
    const isLoadingData = useCustomerReview((state) => state.isLoadingData)
    return (
        <>
            {isLoadingData ? (
                <div className="flex items-center justify-center py-5 space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            ) : (
                <div className="w-full">
                    <span>
                        <p className={"text-center text-xl font-semibold py-3"}>{t("customer_review")}</p>
                    </span>
                    <div>
                        {ratings.length === 0 ? (
                            <p className="text-center text-muted-foreground my-4">
                                {t("no_data")} {/* در فایل ترجمه، کلید no_data باید وجود داشته باشه */}
                            </p>
                        ) : (
                            ratings.map((item, index) => (
                                <div key={index}>asdas</div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
export default DrawerCustomerReviewContent;