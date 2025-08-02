import Image from "next/image";
import backGround from "../../../public/random.jpg";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";

const ErrorComponent = () => {
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
                  className="relative z-20 flex flex-col items-center justify-center h-full text-red-500 text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
              >
                  <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                  >
                      <AlertTriangle size={48} />
                  </motion.div>
                  <motion.p
                      className="text-xl font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                  >
                      {t("error")}
                  </motion.p>

                  <motion.button
                      onClick={() => window.location.reload()}
                      className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      whileHover={{ scale: 1.05 }}
                  >
                      {t("retry")}
                  </motion.button>
              </motion.div>
          </div>
      </>
  )
}
export default ErrorComponent