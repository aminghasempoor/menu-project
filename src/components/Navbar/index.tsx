"use client";
import LanguageSwitcher from "@/core/LanguageToggleButton";
import { ModeToggle } from "@/core/ThemeToggleButton";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { KeyRound } from "lucide-react";
import useUserStore from "@/lib/utils/userStore";
import AddresIcon from "/public/Addres.svg";
import AddresIconLight from "/public/AddressLight.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Navbar() {
    const { theme } = useTheme();
    const t = useTranslations("NavBar");
    const user = useUserStore((state) => state.user);
    return (
        <>
            <div className={"flex mt-2 justify-between px-5 items-center py-6 sm:px-10"}>
                <Link
                    href={"/"}
                    className="scroll-m-20 capitalize text-2xl tracking-tight lg:text-4xl align-baseline cursor-pointer"
                >
                    {theme === "dark" ? (<Image src={AddresIconLight} alt="addres" width={200} height={200} />) : (
                        <Image src={AddresIcon} alt="addres" width={200} height={200} />
                    )}

                </Link>
                <div className={"flex gap-x-3 justify-center items-center"}>
                    <ModeToggle />
                    <LanguageSwitcher />
                    {user.username ? null : (
                        <Link className={"text-md flex gap-x-1"} href={"/login"}>
                            <p className={"p-0 text-sm sm:text-md"}>{t("login")}</p>
                            <KeyRound className={"w-4 h-4 sm:w-5 sm:h-5"} />
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
