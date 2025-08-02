"use client";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ErrorSection() {
    const t = useTranslations("FirstPage");
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-[400px] text-red-600 px-10 space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <AlertTriangle size={48} />
            {t("error")}
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
