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
        <div className={"flex items-center justify-center"}>
            <div
                className="relative w-full sm:min-w-[300px] h-[150px] sm:h-[130px] lg:h-[150px] rounded-2xl overflow-hidden shadow-md">
                <Image src={Picture} alt="pizza" fill className="object-fill" />
                <div
                    className={`absolute inset-0 ${
                        isRTL
                            ? "bg-gradient-to-l from-[#fce5cd]/90 via-[#fce5cd]/70 to-transparent"
                            : "bg-gradient-to-r from-[#fce5cd]/90 via-[#fce5cd]/70 to-transparent"
                    }`}
                />
                <div className={`absolute ${isRTL ? "right-4 text-right" : "left-4 text-left"} top-4 space-y-1`}>
                    <p className="text-[13px] text-gray-500">{t("name")}</p>
                    <h2 className="text-lg font-bold flex items-center text-black gap-1">{title}</h2>
                    <p className="text-sm text-gray-600">{description}</p>
                    <p className="font-bold text-lg text-gray-800">{price}</p>
                </div>
            </div>
        </div>
    );
}
