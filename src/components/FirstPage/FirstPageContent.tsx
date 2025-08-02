import Image from "next/image";
import backGround from "/public/random.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useUser } from "@/lib/utils/useUser";
import AddresIconLight from "/public/AddressLight.svg";

const FirstPageContent = () => {
    const t = useTranslations("FirstPage");
    const user = useUser((state) => state.user);
    return (
        <motion.div
            className="relative w-full h-screen overflow-hidden z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={backGround}
                alt="background"
                priority
                fill
            />
            <div className="absolute inset-0 bg-black/25 z-10" />
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-6 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Image src={AddresIconLight} alt="addres" width={300} height={300} />
                </motion.div>

                <motion.div
                    className="flex gap-4 mt-6 flex-wrap justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link
                            onClick={() => localStorage.setItem("menu_type", "1")}
                            href="/caffe-menu"
                            className="border text-xl font-bold border-white rounded-lg px-6 py-3 hover:bg-white/10 transition"
                        >
                            {t("caffe")}
                        </Link>
                    </motion.div>

                    {user?.has_restaurant && (
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link
                                onClick={() => localStorage.setItem("menu_type", "2")}
                                href="/restaurant-menu"
                                className="border text-xl font-bold border-white rounded-lg px-6 py-3 hover:bg-white/10 transition"
                            >
                                {t("restaurant")}
                            </Link>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    className="absolute bottom-6 text-sm text-white/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <p>
                        {t("contact")}
                        {user?.email}
                    </p>
                    <p className="mt-1">
                        {t("number")}
                        {user?.telephone}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};
export default FirstPageContent;
