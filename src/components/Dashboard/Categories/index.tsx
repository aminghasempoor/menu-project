"use client";
import { useTranslations } from "next-intl";
import { SkeletonCard } from "@/core/SkeletonCard";
import useCategories from "@/lib/hooks/useCategories";
import { CategoryContent } from "./CategoryContent";

export function CategoryComponent() {
    const t = useTranslations("Categories");
    const { categories, loadingCategories, errorCategories } = useCategories()
    return (
        <>
            <h1 className="text-xl scroll-m-20 sm:text-2xl font-bold tracking-tight capitalize py-2">{t("title")}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loadingCategories ? (
                    <SkeletonCard />
                ) : errorCategories ? (
                    <>error</>
                ) : (
                    categories.slice(0, 10).map((category, index) => (
                        <CategoryContent
                            key={index}
                            picture={category.image}
                            title={category.name}
                        />
                    ))
                )}
            </div>
        </>
    );
}
