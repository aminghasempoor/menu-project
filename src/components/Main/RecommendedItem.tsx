import Picture from "../../../public/burger.jpg";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export function RecommendedItem({
    // picture,
    title,
    description,
    price,
}: {
    // picture : string,
    title: string;
    description: string;
    price: string;
}) {
    const locale = useLocale();
    const isRTL = locale === "fa";

    const t = useTranslations("RecommendedItem");
    return (
        <div className="relative w-full h-[100px] sm:h-auto rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300 bg-cover bg-center">
            <Image src={Picture} alt="picture" fill className="object-cover rounded-lg" />
            <div
                className={`absolute inset-0 ${
                    isRTL
                        ? "bg-gradient-to-l from-[#fce5cd]/90 via-[#fce5cd]/70 to-transparent"
                        : "bg-gradient-to-r from-[#fce5cd]/90 via-[#fce5cd]/70 to-transparent"
                }`}
            >
                <div className={`p-2 z-50 ${isRTL ? "right-3 text-right" : "left-3 text-left"} text-black space-y-0.5`}>
                    <p className="text-sm sm:text-xs text-gray-600">{t("name")}</p>
                    <h2 className="text-sm sm:text-base font-bold sm:font-normal lg:font-bold leading-tight">
                        {title}
                    </h2>
                    <p className="sm:text-sm text-gray-700 leading-snug">{description}</p>
                    <p className="font-bold text-sm text-gray-800">
                        {price} {t("unit")}
                    </p>
                </div>
            </div>
        </div>
    );
}
