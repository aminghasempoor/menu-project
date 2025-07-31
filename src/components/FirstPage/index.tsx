"use client";
import Image from "next/image";
import backGround from "../../../public/random.jpg";
import { useTranslations } from "next-intl";
import { User, useUser } from "@/lib/utils/useUser";
import { useEffect, useLayoutEffect, useState } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_USER_HOME } from "@/lib/utils/apiRoutes";
import { AxiosResponse } from "axios";
import Link from "next/link";

export default function FirstPage() {
    const [userName, setUserName] = useState<null | string>(null);
    const t = useTranslations("FirstPage");
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
                    data: User
                }> = await requestServer(`${GET_USER_HOME}${userName}`);
                if (response.data?.data) {
                    setUser(response.data?.data);
                    console.log(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error("API error:", error);
                setError(true);
            }
        };

        if (userName) {
            fetchUserHome();
        }
    }, [userName]);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-black/90 text-white text-xl">
                {t("loading")}
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-black text-red-500 text-xl">
                {t("error")}
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="relative w-full h-screen overflow-hidden z-50">
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={backGround}
                alt="background"
                priority
                fill
            />
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div
                className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-6 px-4">
                <h1 className="text-5xl font-bold">
                    <span className="text-primary">.</span>
                    {user?.name_fa}
                </h1>

                <div className="flex gap-4 mt-6 flex-wrap justify-center">
                    <Link
                        onClick={() => {
                            localStorage.setItem("menu_type", "1");
                        }}
                        href={"/caffe-menu"}
                        className="border text-xl font-bold border-white rounded-lg px-6 py-3 hover:bg-white/10 transition"
                    >
                        {t("caffe")}
                    </Link>
                    {user?.has_restaurant && (
                        <Link
                            onClick={() => {
                                localStorage.setItem("menu_type", "2");
                            }}
                            href={"/restaurant-menu"}
                            className="border text-xl font-bold border-white rounded-lg px-6 py-3 hover:bg-white/10 transition"
                        >
                            {t("restaurant")}
                        </Link>
                    )}
                </div>

                <div className="absolute bottom-6 text-sm text-white/80">
                    <p>{t("contact")}{user?.email}</p>
                    <p className="mt-1">{t("number")}{user?.telephone}</p>
                </div>
            </div>
        </div>
    );
}
