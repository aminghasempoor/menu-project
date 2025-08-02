"use client";
import { User, useUser } from "@/lib/utils/useUser";
import { useEffect, useLayoutEffect, useState } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_USER_HOME } from "@/lib/utils/apiRoutes";
import { AxiosResponse } from "axios";
import LoadingComponent from "@/components/FirstPage/Loading";
import ErrorComponent from "@/components/FirstPage/Error";
import FirstPageContent from "@/components/FirstPage/FirstPageContent";

export default function FirstPage() {
    const [userName, setUserName] = useState<null | string>(null);
    const setUser = useUser((state) => state.setUser);
    const user = useUser((state) => state.user);
    const loading = useUser((state) => state.loading);
    const setLoading = useUser((state) => state.setLoading);
    const error = useUser((state) => state.error);
    const setError = useUser((state) => state.setError);
    const requestServer = useRequest({ auth: false, notification: false });

    useLayoutEffect(() => {
        if (typeof window !== "undefined" && userName === null) {
            const hostname = window.location.hostname;
            const firstPart = hostname.split(".")[0];
            setUserName(firstPart);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        const fetchUserHome = async () => {
            try {
                // @ts-ignore – no types for next-pwa
                const response: AxiosResponse<{
                    data: User;
                }> = await requestServer(`${GET_USER_HOME}${userName}`);
                if (response.data?.data) {
                    setUser(response.data?.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error("API error:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (userName) {
            fetchUserHome();
        }
    }, [userName]);

    if (loading) return <LoadingComponent />;

    if (error || !user) return <ErrorComponent />;

    return <FirstPageContent />;
}
