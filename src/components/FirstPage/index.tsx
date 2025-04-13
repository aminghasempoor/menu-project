import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { Main } from "@/components/Main";
import {
    burgerItems,
    pizzaItems,
    recommendedBurgerItem,
    recommendedPizzaItem,
    recommendedSushiItem, sushiItems,
} from "@/core/utils/foodItems";
export function FirstPage() {

    return (
        <>
            <Navbar />
            <Banner />
            <Main title={"pizza"} recommendedItems={recommendedPizzaItem} foodItem={pizzaItems} />
            <Main title={"burger"} recommendedItems={recommendedBurgerItem} foodItem={burgerItems}/>
            <Main title={"sushi"} recommendedItems={recommendedSushiItem} foodItem={sushiItems}/>
        </>
    );
}
