"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Statistics({ view }: { view: number }) {
    const t = useTranslations("Statistics");

    const stats = [
        { label: "review", value: view },
        { label: "items", value: "52" },
        { label: "categories", value: "11" },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="w-full max-w-xl mx-auto rounded-2xl shadow-md mt-5">
                <CardContent className="flex justify-between items-center p-4 gap-4 text-center text-sm font-medium">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex-1"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                            <div className="mt-1">{t(stat.label)}</div>
                        </motion.div>
                    ))}
                </CardContent>
            </Card>
        </motion.div>
    );
}
