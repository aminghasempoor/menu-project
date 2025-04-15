"use client";
import useUserStore from "@/lib/utils/userStore";
import WithAuthMiddleware from "@/core/middlewares/WithAuthMiddleware";
import LoadingHardPage from "@/core/LoadingHardPage";
import { useTranslations } from "next-intl";

const Layout = ({ children }) => {
    const t = useTranslations();
    const isAuth = useUserStore((state) => state.isAuth);
    const initAuthState = useUserStore((state) => state.initAuthState);
    const errorState = useUserStore((state) => state.errorState);

    if (!initAuthState && !isAuth)
        return (
            <LoadingHardPage
                authState={errorState.status}
                label={
                    errorState.status ? (
                        <div className={"flex justify-center items-center"}>
                            <h1>{t("unknown_error")}</h1>
                            <h1> کد : {errorState.status}</h1>
                        </div>
                    ) : (
                        <h1>{t("authenticating")}</h1>
                    )
                }
                loading={true}
            />
        );

    return (
        <WithAuthMiddleware>
            <div className={"px-10"}>{children}</div>
        </WithAuthMiddleware>
    );
};

export default Layout;
