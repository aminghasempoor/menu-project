import { useTranslations } from "next-intl";
import { RecommendedItem } from "./RecommendedItem";
import { CardItems } from "@/components/Main/CardItems";
const items = [
    { picture: "/pizza.jpg", title: "پیتزا هاوالین", description: "پنیر، سس، اناناس", price: "800000 تومان" },
    { picture: "/burger.jpg", title: "پیتزا مارگاریتا", description: "پنیر، گوجه، ریحان", price: "2200 تومان" },
    { picture: "/pizza.jpg", title: "پیتزا کچاب", description: "کچاب، سوسیس، قارچ", price: "2300 تومان" },
    { picture: "/burger.jpg", title: "پیتزا کچاب", description: "کچاب، سوسیس، قارچ", price: "2300 تومان" },
];
export function Main() {
    const t = useTranslations("Main");
    return (
        <div className={"mx-5"}>
            <div className="flex items-center pb-5">
                <div className="border-t-2 flex-grow mr-2" />
                <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl px-4">{t("pizza")}</h1>
                <div className="border-t-2 flex-grow ml-2" />
            </div>
            <RecommendedItem />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
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
