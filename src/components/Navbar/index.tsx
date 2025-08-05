"use client";
import LanguageSwitcher from "@/core/LanguageToggleButton";
import { ModeToggle } from "@/core/ThemeToggleButton";
import Link from "next/link";
import AddresIcon from "/public/Addres.svg";
import AddresIconLight from "/public/AddressLight.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useUser } from "@/lib/utils/useUser";

export function Navbar() {
    const { theme } = useTheme();
    const user = useUser((state) => state.user);
    return (
        <>
            <div className={"flex mt-2 justify-between px-5 items-center py-6 sm:px-10"}>
                <Link
                    href={"/"}
                    className="scroll-m-20 capitalize text-2xl tracking-tight lg:text-4xl align-baseline cursor-pointer"
                >
                    {theme === "dark" ? (
                        <img src={user?.icon || AddresIconLight} alt="addres" width={100} height={100} />
                    ) : (
                        <img src={user?.icon || AddresIcon} alt="addres" width={100} height={100} />
                    )}
                </Link>
                <div className={"flex gap-x-3 justify-center items-center"}>
                    <ModeToggle />
                    <LanguageSwitcher />
                </div>
            </div>
        </>
    );
}
