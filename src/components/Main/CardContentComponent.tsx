import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function CardContentComponent({
                                         title,
                                         description,
                                         price,
                                         picture,
                                     }: {
    picture: string;
    title: string;
    description: string;
    price: string;
}) {
    const t = useTranslations("Items");

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            className="cursor-pointer"
        >
            <Card className="transition-none">
                <CardContent className="p-0 flex flex-row items-stretch gap-x-2">
                    <div className="w-1/2 relative aspect-[3/1.5]">
                        <Image
                            loading="lazy"
                            fill
                            className="object-cover rounded-lg w-36 h-36"
                            src={picture}
                            alt="picture"
                        />
                    </div>
                    <div className="w-1/2 px-1 flex flex-col justify-between">
                        <div>
                            <h4 className="text-start px-1 text-sm sm:text-md lg:text-xl font-bold lg:font-semibold tracking-tight pt-2 truncate">
                                {title}
                            </h4>
                            <p className="font-pinar px-1 truncate text-start text-xs sm:text-sm leading-6 mt-2 line-clamp-2">
                                {description}
                            </p>
                        </div>
                        <h3 className="text-sm sm:text-md sm:font-semibold text-left mt-2 pb-2 px-2">
                            {price} {t("unit")}
                        </h3>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
