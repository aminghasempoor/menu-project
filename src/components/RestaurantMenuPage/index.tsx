"use client";
import { Banner } from "@/components/Banner";
import { Main } from "@/components/Main";
import ContactMapSection from "@/core/SimpleMap";
import CustomerReview from "@/components/CustomerReview";
import { ScrollToTopButton } from "@/core/ScrollToTopButton";
import { useGetRestaurant } from "@/lib/hooks/useGetRestaurant";
import { useUser } from "@/lib/utils/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingSection from "@/components/CaffeMenuPage/LoadingSection";
import ErrorSection from "@/components/CaffeMenuPage/ErrorSection";
import EmptySection from "@/components/CaffeMenuPage/EmptySection";
import { motion } from "framer-motion";

export function RestaurantMenuPage() {
    const { menu, isLoading, error } = useGetRestaurant();
    const user = useUser((state) => state.user);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/");
        }
    }, [user, router]);

    if (isLoading) {
        return <LoadingSection />;
    }

    if (error || !user) {
        return <ErrorSection />;
    }

    if (!menu || menu.length === 0) {
        return <EmptySection />;
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Banner />
            </motion.div>

            {menu.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                    <Main
                        id={item.name_fa}
                        title={item.name_fa}
                        recommendedItems={item.foods}
                        foodItem={item.foods}
                        isLast={index === menu.length - 1}
                    />
                </motion.div>
            ))}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: menu.length * 0.2 }}
            >
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
            </motion.div>
        </>
    );
}
