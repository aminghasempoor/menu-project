'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import useUserStore from "@/lib/utils/userStore";

interface Props {
    children: React.ReactNode;
}

const UserMiddleware = ({ children }: Props) => {
    const user = useUserStore((state) => state.user);
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        if (!user) return;

        if (user.role === 'admin') {
            setIsAuthorized(true);
        } else {
            setIsAuthorized(false);
            setTimeout(() => {
                router.replace('/dashboard');
            }, 1500);
        }
    }, [user]);

    return (
        <AnimatePresence>
            {isAuthorized === null ? (
                <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    در حال بررسی دسترسی...
                </motion.div>
            ) : isAuthorized ? (
                <motion.div
                    key="authorized"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                >
                    {children}
                </motion.div>
            ) : (
                <motion.div
                    key="unauthorized"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={"text-center mt-10 text-red-500 font-semibold"}
                >
                    شما به این صفحه دسترسی ندارید. در حال انتقال...
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UserMiddleware;
