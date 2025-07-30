"use client";
import Image from "next/image";
import backGround from "../../../public/random.jpg";
import { useTranslations } from "next-intl";
import { Category, useUser } from "@/lib/utils/useUser";
import { useEffect, useLayoutEffect } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_USER_HOME } from "@/lib/utils/apiRoutes";
import { AxiosResponse } from "axios";
import Link from "next/link";

export default function FirstPage() {
    const t = useTranslations("FirstPage")
    const { setUser, user, setCategories } = useUser();
    const requestServer = useRequest({auth : false, notification: false});

    useLayoutEffect(() => {
        if (typeof window !== "undefined" && user === null) {
            const hostname = window.location.hostname;
            const firstPart = hostname.split(".")[0];
            setUser(firstPart);
        }
    }, []);

    useEffect(() => {
        const fetchUserHome = async () => {
            try {
                // @ts-ignore - no type
                const response: AxiosResponse<{ data: Category[] }> = await requestServer(`${GET_USER_HOME}${user}`);
                if (response.data?.data) {
                    setCategories(response.data.data);
                }
            } catch (error) {
                console.error("API error:", error);
            }
        };

        if (user) {
            fetchUserHome();
        }
    }, [user]);


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
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-6 px-4">
                <h1 className="text-5xl font-bold">
                    منولیتا<span className="text-primary">.</span>
                </h1>

                <div className="flex gap-4 mt-6 flex-wrap justify-center">
                    <Link
                        href={"/caffe-menu"}
                        className="border border-white rounded-lg px-6 py-3 hover:bg-white/10 transition"
                    >
                        {t("caffe")}
                    </Link>
                    <Link
                        href={"/restaurant-menu"}
                        className="border border-white rounded-lg px-6 py-3 hover:bg-white/10 transition"
                    >
                        {t("restaurant")}
                    </Link>
                </div>

                <div className="absolute bottom-6 text-sm text-white/80">
                    <p>{t("contact")}</p>
                    <p className="mt-1">{t("number")}</p>
                </div>
            </div>
        </div>
    );
}
