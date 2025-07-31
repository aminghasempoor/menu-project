"use client";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Pizza, IceCream, Salad, CupSoda, Sandwich, Fish, Drumstick, Beef } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import clsx from "clsx"; // اگر clsx یا classnames داری بهتره استفاده کنی

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

    const ref = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.offsetHeight);
        }

        const handleScroll = () => {
            const offset = ref.current?.offsetTop || 0;
            if (window.scrollY > offset + 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* وقتی fixed شد، این div جای خالیشو می‌گیره */}
            {isSticky && <div style={{ height }} />}

            <div
                ref={ref}
                className={clsx(
                    "transition-all duration-300 w-full z-20",
                    isSticky ? "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md" : ""
                )}
            >
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        direction: currentDirection === "fa" ? "rtl" : "ltr",
                        dragFree: true,
                    }}
                    className="w-full max-w-4xl lg:max-w-7xl mx-auto px-4 py-2"
                >
                    <CarouselContent className="-ml-2">
                        {items.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/3 tablet:basis-1/3 tablet_big:basis-1/4 lg:basis-1/6 pl-2"
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
                                        <span className="text-sm font-medium">{t(item.labelKey)}</span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    );
}
