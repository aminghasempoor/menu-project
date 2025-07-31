"use client";
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
import { useGetCoffee } from "@/lib/hooks/useGetCoffee";

export function CaffeMenuPage() {
    const { menu, isLoading, error } = useGetCoffee();
    if (isLoading) {
        return <div className="space-y-8 p-4">
            {[1, 2, 3].map((_) => (
                <div key={_}>
                    <div
                        className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md h-8 w-48 mb-4`}
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((__, i) => (
                            <div
                                key={i}
                                className={`animate-pulse bg-gray-200 dark:bg-gray-700 h-40 rounded-lg`}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>;
    }

    if (error) {
        return <div className="text-center p-10 text-red-500">خطا در دریافت اطلاعات</div>;
    }

    if (!menu || menu.length === 0) {
        return <div className="text-center p-10">داده‌ای یافت نشد.</div>;
    }
    return (
        <>
            <Banner />
            {menu.map((item, index) => (
                <Main
                    key={index}
                    id={item.name_fa}
                    title={item.name_fa}
                    recommendedItems={item.foods}
                    foodItem={item.foods}
                    isLast={false}
                />
            ))}
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
        </>
    );
}
