import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { BannerCarousel } from "@/components/Banner/BannerCarousel";

export function Banner() {
    const t = useTranslations("Banner");
    return (
        <div className="flex flex-col justify-center items-center gap-y-6 px-5 py-10">
            <p className="text-xl lg:text-3xl lg:font-semibold capitalize text-center">{t("title")}</p>
            <div className="relative w-full max-w-xl">
                <Input
                    type="text"
                    placeholder={t("search")}
                    className="pr-12 text-base bg-white/30 backdrop-blur-md shadow-md border border-white/50 rounded-xl focus:ring-2 focus:ring-orange-300"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2" size={20} />
            </div>
            <BannerCarousel />
        </div>
    );
}
