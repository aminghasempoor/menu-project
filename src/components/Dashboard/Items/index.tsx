"use client";
import { useTranslations } from "next-intl";
import { ItemContent } from "./ItemContent";
import useFoods from "@/lib/hooks/useFoods";
import { SkeletonCard } from "@/core/SkeletonCard";
import { EditController } from "./EditController";

import { motion } from "framer-motion";

export function ItemsComponent() {
    const t = useTranslations("Items");
    const { foods, loadingFoods, errorFoods } = useFoods();
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };
    return (
        <>
            <h1 className="text-center scroll-m-20 text-2xl font-bold tracking-tight capitalize py-5">{t("title")}</h1>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {loadingFoods ? (
                    <SkeletonCard />
                ) : errorFoods ? (
                    <p className="text-center font-bold text-red-700">{t("error")}</p>
                ) : (
                    foods.map((food, index: number) => (
                        <motion.div key={index} variants={itemVariants}>
                            <ItemContent
                                id={food.id}
                                picture={food.image}
                                title={food.name_fa}
                                description={food.description}
                                price={food.price}
                            />
                        </motion.div>
                    ))
                )}
            </motion.div>
            <EditController />
        </>
    );
}
