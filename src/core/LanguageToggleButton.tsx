"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { Earth } from "lucide-react";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locales = ["en", "fa"];
    const changeLanguage = (locale: string) => {
        const segments = pathname.split("/").filter(Boolean);
        if (locales.includes(segments[0])) {
            segments.shift();
        }
        const newPath = `/${locale}/${segments.join("/")}`;
        router.push(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Earth className=" w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
                {locales.map((locale) => (
                    <DropdownMenuItem className={"text-center"} key={locale} onClick={() => changeLanguage(locale)}>
                        {locale === "en" ? "English" : "فارسی"}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
export default LanguageSwitcher;
