"use client";
import { motion } from "framer-motion";

export default function LoadingSection() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 p-4">
            {[1, 2, 3].map((_, sectionIndex) => (
                <motion.div
                    key={sectionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIndex * 0.2 }}
                >
                    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md h-8 w-48 mb-4" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((__, i) => (
                            <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 h-40 rounded-lg" />
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
