import { Banner } from "@/components/Banner";
import { Main } from "@/components/Main";
import {
    burgerItems,
    pizzaItems,
    recommendedBurgerItem,
    recommendedPizzaItem,
    recommendedSushiItem,
    sushiItems,
} from "@/core/utils/foodItems";
export function FirstPage() {

    return (
        <>
            <Banner />
            <Main
                id="pizza"
                title="pizza"
                recommendedItems={recommendedPizzaItem}
                foodItem={pizzaItems}
                isLast={false}
            />
            <Main
                id="burger"
                title="burger"
                recommendedItems={recommendedBurgerItem}
                foodItem={burgerItems}
                isLast={false}
            />
            <Main
                id="sushi"
                title="sushi"
                recommendedItems={recommendedSushiItem}
                foodItem={sushiItems}
                isLast={true}
            />
        </>
    );
}
