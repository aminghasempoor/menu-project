"use client";
import { useTranslations } from "next-intl";
import { SkeletonCard } from "@/core/SkeletonCard";
import useCategories from "@/lib/hooks/useCategories";
import { CategoryContent } from "./CategoryContent";
import { EditController } from "./EditController";
import { motion } from "framer-motion";
import { ItemContent } from "@/components/Dashboard/Items/ItemContent";

export function CategoryComponent() {
    const t = useTranslations("Categories");
    const { categories, loadingCategories, errorCategories } = useCategories();
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
                ease: "easeOut",
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
                ease: "easeOut",
            },
        },
    };
    return (
        <>
            <h1 className="text-center text-xl scroll-m-20 sm:text-2xl font-bold tracking-tight capitalize pb-3">{t("title")}</h1>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {loadingCategories ? (
                    <SkeletonCard />
                ) : errorCategories ? (
                    <p className="text-center font-bold text-red-700">{t("error")}</p>
                ) : (
                    categories.map((category, index: number) => (
                        <motion.div key={index} variants={itemVariants}>
                            <CategoryContent
                                id={category.id}
                                title={category.name_fa}
                            />
                        </motion.div>
                    ))
                )}
            </motion.div>
            <EditController />
        </>
    );
}
