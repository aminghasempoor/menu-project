import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { RecommendedItem } from "@/components/Main/RecommendedItem";

const RecommendedItemDrawer = ({
                                   picture,
                                   title,
                                   description,
                                   price,
                                   ingredients
                               }: {
    picture: string;
    title: string;
    description: string;
    price: string;
    ingredients: string;
}) => {
    const t = useTranslations("RecommendedItem");
    return (
        <>
            <Drawer>
                <DrawerTrigger className={"w-full"}>
                    <RecommendedItem picture={picture} title={title} description={description} price={price} />
                </DrawerTrigger>
                <DrawerContent className="w-full max-w-md mx-auto rounded-t-3xl pb-6">
                    <DrawerHeader className="flex items-center justify-around text-center m-0 px-0">
                        <div className="w-1/2 relative aspect-[3/1.5]">
                            <Image
                                loading="lazy"
                                fill
                                className="object-cover rounded-lg w-36 h-36"
                                src={picture}
                                alt="picture"
                            />
                        </div>
                        <DrawerTitle className="text-xl font-normal">{title}</DrawerTitle>
                    </DrawerHeader>
                    <div className="px-5 space-y-4">
                        <div>
                            <p className="text-md font-semibold text-muted-foreground mb-2">
                                {t("ingredient")} : {ingredients}
                            </p>
                        </div>
                        <DrawerFooter className="flex justify-between items-center pt-4">
                            <div className="bg-gray-100 text-green-700 px-4 py-2 rounded-lg text-lg font-semibold">
                                {parseInt(price).toLocaleString()}هزارتومان
                            </div>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default RecommendedItemDrawer