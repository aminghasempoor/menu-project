"use client";

import { useUserManagement } from "@/lib/hooks/useUserManagement";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { motion, AnimatePresence } from "framer-motion";

const UserManagementComponent = () => {
    const { data, loading, error } = useUserManagement();

    const hasData = Array.isArray(data) && data.length > 0;

    return (
        <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-center text-gray-500 py-4"
                    >
                        در حال بارگذاری...
                    </motion.div>
                ) : error ? (
                    <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="text-center text-red-500 py-4"
                    >
                        خطا در بارگذاری داده‌ها
                    </motion.div>
                ) : hasData ? (
                    <motion.div
                        key="table"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <DataTable data={data} columns={columns} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="no-data"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-center text-gray-500 py-4"
                    >
                        هیچ داده‌ای یافت نشد.
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserManagementComponent;
