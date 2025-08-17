"use client";
import LanguageSwitcher from "@/core/LanguageToggleButton";
import { ModeToggle } from "@/core/ThemeToggleButton";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useUser } from "@/lib/utils/useUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function Navbar() {
    const { theme } = useTheme();
    const user = useUser((state) => state.user);
    const [menuType, setMenuType] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const type = localStorage.getItem("menu_type");
            if (type) setMenuType(type);
        }
    }, []);

    const switchMenu = (type: string, path: string) => {
        localStorage.setItem("menu_type", type);
        setMenuType(type);
        router.push(path);
    };

    return (
        <div className="flex mt-2 justify-between px-5 items-center py-2 sm:px-10">
            <Link
                href="/"
                className="scroll-m-20 capitalize text-2xl tracking-tight lg:text-4xl align-baseline cursor-pointer"
            >
                {theme === "dark" ? (
                    <img src={user?.icon} alt="icon" width={100} height={100} />
                ) : (
                    <img src={user?.icon_dark} alt="icon" width={100} height={100} />
                )}
            </Link>

            <div className="flex gap-x-3 justify-center items-center">
                {user?.has_restaurant && menuType === "2" && (
                    <>
                        <button
                            onClick={() => switchMenu("1", "/caffe-menu")}
                        >
                            ☕ منو کافه
                        </button>
                    </>
                )}
                {user?.has_restaurant && menuType === "1" && (
                    <>
                        <button
                            onClick={() => switchMenu("2", "/restaurant-menu")}
                        >
                            🍽️ منو رستوران
                        </button>
                    </>
                )}
                <ModeToggle />
                <LanguageSwitcher />
            </div>
        </div>
    );
}
