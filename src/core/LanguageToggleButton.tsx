"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { Earth } from "lucide-react";
import Cookies from "js-cookie";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locales = ["en", "fa"];

    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = locales.includes(segments[0]) ? segments[0] : "fa";

    const changeLanguage = (locale: string) => {
        // ذخیره locale در کوکی
        Cookies.set("NEXT_LOCALE", locale);

        const newSegments = [...segments];
        if (locales.includes(newSegments[0])) {
            newSegments.shift();
        }
        const newPath = `/${locale}/${newSegments.join("/")}`;
        router.push(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-x-1 items-center cursor-pointer">
                <p className="p-0 text-sm sm:text-md">{currentLocale === "en" ? "En" : "فارسی"}</p>
                <Earth className="w-4 h-4 sm:w-5 sm:h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
                {locales.map((locale) => (
                    <DropdownMenuItem
                        className="text-center cursor-pointer"
                        key={locale}
                        onClick={() => changeLanguage(locale)}
                    >
                        {locale === "en" ? "English" : "فارسی"}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;
