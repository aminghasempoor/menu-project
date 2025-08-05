import { CardItems } from "@/components/Main/CardItems";
import { Food } from "@/lib/utils/useMenuStore ";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import RecommendedItemDialog from "@/components/Main/RecommendedItemDialog";
import RecommendedItemDrawer from "@/components/Main/RecommendedItemDrawer";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
        },
    }),
};

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
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return (
        <div id={id} className={`mx-5 ${isLast ? "mb-20" : "mb-10"}`}>
            <div className="flex items-center pb-5">
                <div className="border-t-2 flex-grow mr-2 border-black" />
                <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl px-4">{title}</h1>
                <div className="border-t-2 flex-grow ml-2 border-black" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                {recommendedItems.length > 0 &&
                    recommendedItems
                        .filter((item) => item.is_recommended)
                        .map((item, index) => (
                            <motion.div
                                key={`recommended-${index}`}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={itemVariants}
                            >
                                {isDesktop ? (
                                    <RecommendedItemDialog
                                        ingredients={item.ingredients}
                                        title={item.name_fa}
                                        description={item.description}
                                        price={item.price}
                                        picture={item.image}
                                    />
                                ) : (
                                    <RecommendedItemDrawer
                                        ingredients={item.ingredients}
                                        title={item.name_fa}
                                        description={item.description}
                                        price={item.price}
                                        picture={item.image}
                                    />
                                )}
                            </motion.div>
                        ))}
                {foodItem
                    .filter((item) => !item.is_recommended)
                    .map((item, index) => (
                        <motion.div
                            key={`food-${index}`}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                        >
                            <CardItems
                                picture={item.image}
                                title={item.name_fa}
                                description={item.description}
                                price={item.price}
                            />
                        </motion.div>
                    ))}
            </div>
        </div>
    );
}
