"use client";
import { motion } from "framer-motion";
import { Inbox } from "lucide-react";
import { useTranslations } from "next-intl";

export default function EmptySection() {
    const t = useTranslations("FirstPage");
    return (
        <motion.div
            className="flex flex-col items-center justify-center text-gray-500 p-10 space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Inbox size={48} />
            <p className="text-lg font-medium">{t("no_data")}</p>
            <motion.button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                whileHover={{ scale: 1.05 }}
            >
                {t("retry")}
            </motion.button>
        </motion.div>
    );
}
