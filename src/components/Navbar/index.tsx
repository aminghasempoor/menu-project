"use client";
import LanguageSwitcher from "@/core/LanguageToggleButton";
import { ModeToggle } from "@/core/ThemeToggleButton";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { KeyRound, User } from "lucide-react";
import useUserStore from "@/lib/utils/userStore";
import { useFirstPage } from "@/lib/utils/useFirstPage";

export function Navbar() {
    const t = useTranslations("NavBar");
    const user = useUserStore((state) => state.user);
    const { selectedMenu } = useFirstPage();
    return (
        <>
            {selectedMenu === "firstPage" ? null : (
                <div className={"flex mt-2 justify-between px-5 items-center py-6 sm:px-10 z-50"}>
                    <Link
                        href={"/"}
                        className="scroll-m-20 capitalize text-2xl tracking-tight lg:text-4xl align-baseline cursor-pointer"
                    >
                        {t("title")}
                        <small className={"text-neutral-600"}>.</small>
                    </Link>
                    <div className={"flex gap-x-3 justify-center items-center"}>
                        <ModeToggle />
                        <LanguageSwitcher />
                        {user.username ? (
                            <Link className={"text-md flex gap-x-1"} href={"/dashboard"}>
                                <p className={"p-0 text-sm sm:text-md"}>{t("dashboard")}</p>
                                <User className={"w-4 h-4 sm:w-5 sm:h-5"} />
                            </Link>
                        ) : (
                            <Link className={"text-md flex gap-x-1"} href={"/login"}>
                                <p className={"p-0 text-sm sm:text-md"}>{t("login")}</p>
                                <KeyRound className={"w-4 h-4 sm:w-5 sm:h-5"} />
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
