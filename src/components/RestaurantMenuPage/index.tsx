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
import { ScrollToTopButton } from "@/core/ScrollToTopButton";

export function RestaurantMenuPage() {

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
                    <div className="flex items-center gap-x-2 px-4 pb-2">
                        <div className="flex-[3]">
                            <CustomerReview />
                        </div>
                        <div className="flex-1">
                            <ScrollToTopButton />
                        </div>
                    </div>
                    <div className="w-full px-4 z-20">
                        <ContactMapSection />
                    </div>
                </div>
                <div className="w-full px-4 z-20">
                    <ContactMapSection />
                </div>
            </div>
        </>
    );
}
