import Image from "next/image";
import Picture from "../../../../public/burger.jpg";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export function ItemContent({
                                         title,
                                         description,
                                         price,
                                     }: {
    picture: string;
    title: string;
    description: string;
    price: string;
}) {
    return (
        <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] cursor-pointer">
            <CardContent className="p-0 flex flex-row items-stretch gap-x-2">
                <div className="w-1/2 relative aspect-[4/3]">
                <Image
                    loading="lazy"
                    fill
                    className="object-cover rounded-lg"
                    src={Picture}
                    alt="picture"
                />
                 </div>
                <div className="w-1/2 px-1 flex flex-col justify-between">
                    <div>
                        <h4 className="text-start text-sm sm:text-md lg:text-xl font-bold lg:font-semibold tracking-tight pt-2">
                            {title}
                        </h4>
                        <p className="font-pinar text-start text-xs sm:text-sm leading-6 mt-2 line-clamp-2">
                            {description}
                        </p>
                    </div>
                    <h3 className="text-sm sm:text-md sm:font-semibold text-left mt-2 pb-2 px-2">{price}</h3>
                </div>
            </CardContent>
        </Card>
    );
}
