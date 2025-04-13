import { useTranslations } from "next-intl";
import { RecommendedItem } from "./RecommendedItem";
import { CardItems } from "@/components/Main/CardItems";

export function Main({title, recommendedItems, foodItem} : {title : string, recommendedItems : object[] , foodItem : object[]}) {
    const t = useTranslations("Main");
    return (
        <div className={"m-5"}>
            <div className="flex items-center pb-5">
                <div className="border-t-2 flex-grow mr-2 border-black" />
                <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl px-4">{t(`${title}`)}</h1>
                <div className="border-t-2 flex-grow ml-2 border-black" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {recommendedItems.map((item) => (
                    <RecommendedItem
                        picture={item.picture}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                    />
                ))}
                {foodItem.map((item, index) => (
                    <CardItems
                        key={index}
                        picture={item.picture}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}
