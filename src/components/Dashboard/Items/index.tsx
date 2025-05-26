"use client";
import { useTranslations } from "next-intl";
import { ItemContent } from "./ItemContent";
import useFoods from "@/lib/hooks/useFoods";
import { SkeletonCard } from "@/core/SkeletonCard";
import { EditController } from "./EditController";

export function ItemsComponent() {
    const t = useTranslations("Items");
    const { foods, loadingFoods, errorFoods } = useFoods();
    return (
        <>
            <h1 className="text-xl scroll-m-20 sm:text-2xl font-bold tracking-tight capitalize py-2">{t("title")}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loadingFoods ? (
                    <SkeletonCard />
                ) : errorFoods ? (
                    <p className={"text-center font-bold text-red-700"}>{t("error")}</p>
                ) : (
                    foods.map((food, index) => (
                        <ItemContent
                            id={food.id}
                            key={index}
                            picture={food.image}
                            title={food.name_fa}
                            description={food.description}
                            price={food.price}
                        />
                    ))
                )}
            </div>
            <EditController />
        </>
    );
}
