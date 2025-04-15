"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { Earth } from "lucide-react";
import useRequest from "@/lib/hooks/useRequest";
import { CHANGE_LANGUAGE } from "@/lib/utils/apiRoutes";

const LanguageSwitcher = () => {
    const router = useRouter();
    const requestServer = useRequest({ notification: false });
    const pathname = usePathname();
    const locales = ["en", "fa"];

    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = locales.includes(segments[0]) ? segments[0] : "fa";

    const changeLanguage = (locale: string) => {
        const newSegments = [...segments];
        if (locales.includes(newSegments[0])) {
            newSegments.shift(); // remove old locale
        }
        const newPath = `/${locale}/${newSegments.join("/")}`;
        router.push(newPath);
    };
    const handleToggle = async (currentLocale: string) => {
        try {
            const response = await requestServer(CHANGE_LANGUAGE, "post", {
                auth : true,
                data: {
                    language: currentLocale,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-x-2">
                <p>{currentLocale === "en" ? "English" : "فارسی"}</p>
                <Earth className="text-primary w-5 h-5 p-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onClick={()=>handleToggle(currentLocale)}
                className="w-32"
            >
                {locales.map((locale) => (
                    <DropdownMenuItem className="text-center" key={locale} onClick={() => changeLanguage(locale)}>
                        {locale === "en" ? "English" : "فارسی"}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;
