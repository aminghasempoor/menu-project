"use client";
import { useTranslations } from "next-intl";
import { ItemContent } from "./ItemContent";
import useFoods from "@/lib/hooks/useFoods";
import { SkeletonCard } from "@/core/SkeletonCard";
import { useEditItemStore } from "@/lib/utils/useEditItemStore";
import { EditItem } from "./Edit";
import { useGetEditContent } from "@/lib/hooks/useGetEditContent";
import { GET_EDIT_ITEM } from "@/lib/utils/apiRoutes";

export function ItemsComponent() {
    const t = useTranslations("Items");
    const { foods, loadingFoods, errorFoods } = useFoods();
    const isOpen = useEditItemStore((state) => state.isOpen)
    const editID = useEditItemStore((state) => state.id)
    const {loading , data} = useGetEditContent(`${GET_EDIT_ITEM}/${editID}`);
    return (
        <>
            <h1 className="text-xl scroll-m-20 sm:text-2xl font-bold tracking-tight capitalize py-2">{t("title")}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loadingFoods ? (
                    <SkeletonCard />
                ) : errorFoods ? (
                    <>error</>
                ) : (
                    foods.map((food, index) => (
                        <ItemContent
                            id={food.id}
                            key={index}
                            picture={food.image}
                            title={food.name}
                            description={food.description}
                            price={food.price}
                        />
                    ))
                )}
            </div>
            {isOpen && (
                <>
                    loading ? (

                    ) : (
                    <EditItem data={data!} />
                    )
                </>
            )}
        </>
    );
}
