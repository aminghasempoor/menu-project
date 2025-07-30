"use client"
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
import ContactMapSection from "@/core/SimpleMap";
import CustomerReview from "@/components/CustomerReview";

export function CaffeMenuPage() {

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
            <div>
                <div>
                    <CustomerReview />
                </div>
                <div className="w-full px-4 z-20">
                    <ContactMapSection />
                </div>
            </div>
        </>
    );
}
