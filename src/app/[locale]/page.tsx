"use client"
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client"
import useRequest from "@/lib/hooks/useRequest";

export default function Home() {
    const t = useTranslations();
    const requestServer = useRequest({ notification: true });
    const handleClick = async () => {
        requestServer("/api/fake-sign-in", "post", {
            data: {
                phone_number: "0913",
                password: "123",
            },
            success: {
                notification: { show: true },
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <section className="flex flex-col items-center justify-center h-screen text-center">
                <motion.h1
                    className="text-5xl font-bold text-gray-800 md:text-7xl"
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    {t("HomePage.title")}
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg text-gray-600 md:text-xl"
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Build fast, modern, and elegant web experiences.
                </motion.p>
                <motion.div
                    className="mt-8 flex space-x-4"
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button onClick={handleClick} variant="default" className="px-6 py-3">
                        Get Started
                    </Button>
                    <Button variant="outline" className="px-6 py-3">
                        Learn More
                    </Button>
                </motion.div>

            </section>
        </div>
    );
}