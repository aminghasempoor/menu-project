"use client";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function BannerCarousel() {
    const pathname = usePathname();
    const locales = ["en", "fa"];
    const segments = pathname.split("/").filter(Boolean);
    const currentDirection = locales.includes(segments[0]) ? segments[0] : "fa";

    const ref = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [height, setHeight] = useState(0);

    const [menuNames, setMenuNames] = useState<string[]>([]);

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

    useEffect(() => {
        const stored = localStorage.getItem("banner");
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as string[];
                setMenuNames(parsed);
            } catch {
                setMenuNames([]);
            }
        }
    }, []);

    return (
        <>
            {isSticky && <div style={{ height }} />}
            <div
                ref={ref}
                className={clsx(
                    "transition-all duration-300 w-full z-20",
                    isSticky ? "fixed top-0 left-0 right-0 backdrop-blur-md shadow-md" : ""
                )}
            >
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                        direction: currentDirection === "fa" ? "rtl" : "ltr",
                        dragFree: true,
                    }}
                    className="w-full max-w-4xl lg:max-w-7xl mx-auto px-4 py-2"
                >
                    <CarouselContent className="-ml-2">
                        {menuNames.length > 0 ? (
                            menuNames.map((nameFa, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/3 tablet:basis-1/3 tablet_big:basis-1/4 lg:basis-1/6 pl-2"
                                >
                                    <Card
                                        onClick={() => {
                                            const section = document.getElementById(nameFa);
                                            section?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="rounded-xl border bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition cursor-pointer"
                                    >
                                        <CardContent className="flex items-center justify-center gap-1 p-2">
                                            {/* فقط متن بدون آیکون */}
                                            <span className="text-sm font-medium">{nameFa}</span>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))
                        ) : (
                            // اگر داده نبود می‌تونی یه پیام یا Skeleton اینجا بذاری
                            <p className="p-4 text-center w-full">دسته بندی موجود نیست.</p>
                        )}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    );
}
