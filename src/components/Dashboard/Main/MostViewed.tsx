"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Picture from "../../../../public/burger.jpg";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { burgerItems } from "@/core/utils/foodItems";
import { usePathname } from "next/navigation";

export function MostViewed() {
    const pathname = usePathname();
    const locales = ["en", "fa"];
    const segments = pathname.split("/").filter(Boolean);
    const currentDirection = locales.includes(segments[0]) ? segments[0] : "fa";
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    direction: currentDirection === "fa" ? "rtl" : "ltr",
                    dragFree: true,
                }}
                className="w-full max-w-2xl lg:max-w-5xl my-5"
            >
                <CarouselContent className="-ml-2">
                    {burgerItems.map((item, index) => {
                        return (
                            <CarouselItem key={index} className="basis-1/2 sm:basis-1/5 lg:basis-1/6 pl-2">
                                <Card
                                    className="rounded-xl border bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition cursor-pointer">
                                    <CardContent className="flex flex-col items-center justify-center gap-1 p-2">
                                        <Image
                                            loading={"lazy"}
                                            className="rounded-lg max-w-[150px] sm:max-w-[180px] max-h-[100px] sm:max-h-[120px] lg:max-w-[400px] lg:max-h-[150px]"
                                            style={{ width: "100%", height: "100%" }}
                                            src={Picture}
                                            alt="picture"
                                        />
                                        <div className="w-full px-1 flex justify-center items-center">
                                            <h4 className="text-start text-sm sm:text-md lg:text-xl font-bold lg:font-semibold tracking-tight pt-2">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </>
    );
}