"use client";
import { motion } from "framer-motion";
import React from "react";

const PoweredBy = () => {
    return (
        <motion.div
            className="flex justify-end items-center mt-8 text-gray-500 dark:text-gray-400 text-sm px-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <span className={"px-2"}>توسعه داده شده توسط </span>
            <motion.a
                href="https://menulita.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-[#F9A03F] dark:text-[#F9A03F]"
                whileHover={{ scale: 1.1, color: "#F9A03F" }} // تغییر رنگ و بزرگ شدن هنگام هاور
                whileTap={{ scale: 0.95 }} // افکت کلیک کوچک شدن
            >
                Menulita
            </motion.a>
        </motion.div>
    );
};

export default PoweredBy;
