import { useTranslations } from "next-intl";

const DialogCustomerReviewContent = () => {
    const t = useTranslations("CustomerReview")
    return (
        <>
            <div className={"w-full"}>
                <span>
                    <p>{t("customer_review")}</p>
                </span>
                <div></div>
            </div>
        </>
    )
}
export default DialogCustomerReviewContent;