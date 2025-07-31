import { useTranslations } from "next-intl";
import { RecommendedItem } from "./RecommendedItem";
import { CardItems } from "@/components/Main/CardItems";
import { Food } from "@/lib/utils/useMenuStore ";

export function Main({
                         id,
                         title,
                         recommendedItems,
                         foodItem,
                         isLast,
                     }: {
    id: string;
    title: string;
    recommendedItems: Food[];
    foodItem: Food[];
    isLast: boolean;
}) {
    const t = useTranslations("Main");
    return (
        <div id={id} className={`mx-5 ${isLast ? "mb-20" : "mb-10"}`}>
            <div className="flex items-center pb-5">
                <div className="border-t-2 flex-grow mr-2 border-black" />
                <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl px-4">{title}</h1>
                <div className="border-t-2 flex-grow ml-2 border-black" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedItems.length > 0 && (
                    <>
                        {recommendedItems.length > 0 && (
                            <>
                                {recommendedItems
                                    .filter(item => item.is_recommended)  // فقط اونایی که true هستن
                                    .map((item, index) => (
                                        <RecommendedItem
                                            key={`recommended-${index}`}
                                            title={item.name_fa}
                                            description={item.description}
                                            price={item.price}
                                            picture={item.image}
                                        />
                                    ))}
                            </>
                        )}
                    </>
                )}
                {foodItem.length > 0 && (
                    <>
                        {foodItem.map((item, index) => (
                            <CardItems
                                key={`food-${index}`}
                                picture={item.image}
                                title={item.name_fa}
                                description={item.description}
                                price={item.price}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
