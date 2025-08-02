import Image from "next/image";
import backGround from "../../../public/random.jpg";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

const LoadingComponent = () => {
    const t = useTranslations("FirstPage");
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden z-50">
                {/* Background Image */}
                <Image
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src={backGround}
                    alt="background"
                    priority
                    fill
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                <motion.div
                    className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="animate-spin"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Loader2 size={48} className="text-white" />
                    </motion.div>
                    <motion.p
                        className="text-xl font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {t("loading")}
                    </motion.p>
                </motion.div>
            </div>
        </>
    );
};
export default LoadingComponent;
