import { Navbar } from "@/components/Navbar";
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
            <Navbar />
            <Banner />
            <Main id="pizza" title={"pizza"} recommendedItems={recommendedPizzaItem} foodItem={pizzaItems} />
            <Main id="burger" title={"burger"} recommendedItems={recommendedBurgerItem} foodItem={burgerItems} />
            <Main id="sushi" title={"sushi"} recommendedItems={recommendedSushiItem} foodItem={sushiItems} />
        </>
    );
}
