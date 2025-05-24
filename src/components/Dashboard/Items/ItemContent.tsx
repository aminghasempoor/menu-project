import Image from "next/image";
import Picture from "../../../../public/burger.jpg";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useTranslations } from "next-intl";
import { useEditItemStore } from "@/lib/utils/useEditItemStore";

export function ItemContent({
                                title,
                                id,
                                description,
                                price,
                            }: {
    picture: string;
    title: string;
    id: number;
    description: string;
    price: string;
}) {
    const t = useTranslations();
    const openEditDialog = useEditItemStore((state) => state.openEditDialog);
    
    return (
        <Card onClick={() => openEditDialog(id)}
              className="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] cursor-pointer">
            <CardContent className="p-0 flex flex-row items-stretch gap-x-2">
                <div className="w-1/2 relative aspect-[4/3]">
                    <Image loading="lazy" fill className="object-cover rounded-lg" src={Picture} alt="picture" />
                </div>
                <div className="w-1/2 px-1 flex flex-col justify-between">
                    <div>
                        <h4 className="text-start text-sm sm:text-md lg:text-xl pt-2 line-clamp-1">{title}</h4>
                        <p className="font-pinar text-start text-xs sm:text-sm line-clamp-2">{description}</p>
                    </div>
                    <h3 className="text-sm sm:text-md text-left mt-2 pb-2 px-2">{price} {t("unit")}</h3>
                </div>
            </CardContent>
        </Card>
    );
}
