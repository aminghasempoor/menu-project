import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { CardContentComponent } from "@/components/Main/CardContentComponent";
import Image from "next/image";
import Picture from "../../../public/burger.jpg";
import React from "react";
import { useTranslations } from "next-intl";

export function DrawerContentComponent({
    picture,
    title,
    description,
    price,
}: {
    picture: string;
    title: string;
    description: string;
    price: string;
}) {
    const t = useTranslations("CardItem");
    return (
        <Drawer>
            <DrawerTrigger>
                <CardContentComponent picture={picture} title={title} description={description} price={price} />
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-md mx-auto rounded-t-3xl pb-6">
                <DrawerHeader className="flex items-center justify-around text-center">
                    <Image src={Picture} alt={title} className="w-36 h-36 rounded-xl object-cover mb-4 shadow-md" />
                    <DrawerTitle className="text-xl font-normal">{title}</DrawerTitle>
                </DrawerHeader>
                <div className="px-10 space-y-4">
                    <div>
                        <p className="text-sm text-foreground/60">{t("items")}</p>
                        <p className="font-semibold text-sm">{description}</p>
                    </div>
                    <DrawerDescription className="text-sm leading-relaxed">{t("description")}</DrawerDescription>
                    <DrawerFooter className="flex justify-between items-center pt-4">
                        <div className="bg-gray-100 text-green-700 px-4 py-2 rounded-lg text-lg font-bold">
                            {parseInt(price).toLocaleString()}
                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
