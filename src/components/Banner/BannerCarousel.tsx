"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Pizza, IceCream, Salad, CupSoda, Sandwich, Fish, Drumstick, Beef } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const items = [
    { icon: <Pizza className="w-6 h-6" />, labelKey: "pizza" },
    { icon: <Beef className="w-6 h-6" />, labelKey: "burger" },
    { icon: <Sandwich className="w-6 h-6" />, labelKey: "sushi" },
    { icon: <Drumstick className="w-6 h-6" />, labelKey: "kebab" },
    { icon: <Fish className="w-6 h-6" />, labelKey: "seafood" },
    { icon: <Salad className="w-6 h-6" />, labelKey: "salad" },
    { icon: <Sandwich className="w-6 h-6" />, labelKey: "sandwich" },
    { icon: <IceCream className="w-6 h-6" />, labelKey: "dessert" },
    { icon: <CupSoda className="w-6 h-6" />, labelKey: "milkshake" },
];

export function BannerCarousel() {
    const t = useTranslations("Banner");
    const pathname = usePathname();
    const locales = ["en", "fa"];
    const segments = pathname.split("/").filter(Boolean);
    const currentDirection = locales.includes(segments[0]) ? segments[0] : "fa";

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
                direction: currentDirection === "fa" ? "rtl" : "ltr",
                dragFree: true,
            }}
            className="w-full max-w-4xl lg:max-w-7xl px-4"
        >
            <CarouselContent className="-ml-2">
                {items.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-1/2 tablet:basis-1/3 tablet_big:basis-1/4 lg:basis-1/6 pl-2"
                    >
                        <Card
                            onClick={() => {
                                const section = document.getElementById(item.labelKey);
                                section?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="rounded-xl border bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition cursor-pointer"
                        >
                            <CardContent className="flex items-center justify-center gap-1 p-2">
                                {item.icon}
                                <span className="text-sm font-medium">{t(item.labelKey)}</span>{" "}
                                {/* ترجمه متن با استفاده از کلید */}
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
