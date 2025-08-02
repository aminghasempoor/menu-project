"use client";
import LanguageSwitcher from "@/core/LanguageToggleButton";
import { ModeToggle } from "@/core/ThemeToggleButton";
import Link from "next/link";
import AddresIcon from "/public/Addres.svg";
import AddresIconLight from "/public/AddressLight.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Navbar() {
    const { theme } = useTheme();
    return (
        <>
            <div className={"flex mt-2 justify-between px-5 items-center py-6 sm:px-10"}>
                <Link
                    href={"/"}
                    className="scroll-m-20 capitalize text-2xl tracking-tight lg:text-4xl align-baseline cursor-pointer"
                >
                    {theme === "dark" ? (
                        <Image src={AddresIconLight} alt="addres" width={150} height={150} />
                    ) : (
                        <Image src={AddresIcon} alt="addres" width={150} height={150} />
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
