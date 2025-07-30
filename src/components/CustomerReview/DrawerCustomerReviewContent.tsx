import { useTranslations } from "next-intl";
import { useEffect } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_RATING } from "@/lib/utils/apiRoutes";
import { useUser } from "@/lib/utils/useUser";

const DrawerCustomerReviewContent = () => {
    const t = useTranslations("CustomerReview")
    const requestServer = useRequest({auth : false , notification : false})
    const { user } = useUser();
    useEffect(() => {
        const fetchUserHome = async () => {
            try {
                // @ts-ignore - no type
                const response = await requestServer(`${GET_RATING}${user}`).then((res) => {

                })

            } catch (error) {
                console.error("API error:", error);
            }
        };
        fetchUserHome()
    }, []);
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
export default DrawerCustomerReviewContent;