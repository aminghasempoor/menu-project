"use client";
import Image from "next/image";
import backGround from "../../../public/random.jpg";
import { useFirstPage } from "@/lib/utils/useFirstPage";
import { MenuPage } from "@/components/MenuPage"; // حواست باشه مسیر درست باشه

export default function FirstPage() {
    const { selectMenu, selectedMenu } = useFirstPage();
    if (selectedMenu === "cafe") return <MenuPage />;
    if (selectedMenu === "restaurant") return <MenuPage />;
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={backGround}
                alt="background"
                priority
                fill
            />
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-6 px-4">
                <h1 className="text-5xl font-bold">
                    منولیتا<span className="text-primary">.</span>
                </h1>

                <div className="flex gap-4 mt-6 flex-wrap justify-center">
                    <button
                        onClick={() => selectMenu("cafe")}
                        className="border border-white rounded-lg px-6 py-3 hover:bg-white/10 transition"
                    >
                        منوی کافه
                    </button>
                    <button
                        onClick={() => selectMenu("restaurant")}
                        className="border border-white rounded-lg px-6 py-3 hover:bg-white/10 transition"
                    >
                        منوی رستوران
                    </button>
                </div>

                <div className="absolute bottom-6 text-sm text-white/80">
                    <p>menulita@gmail.com</p>
                    <p className="mt-1">۰۹۱۲ ۳۴۵ ۶۷۸۹</p>
                </div>
            </div>
        </div>
    );
}
