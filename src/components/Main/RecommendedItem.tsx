import Picture from "../../../public/burger.jpg"
import Image from "next/image";

export function RecommendedItem () {
    return(
        <div className={"flex items-center justify-center"}>
            <div className="relative w-full max-w-[600px] h-[160px] rounded-2xl overflow-hidden shadow-md mb-4">
                <Image
                    src={Picture}
                    alt="پیتزا مارگاریتا"
                    fill
                    className="object-fill"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#fce5cd]/90 via-[#fce5cd]/70 to-transparent" />
                <div className="absolute right-4 top-4 text-right space-y-1">
                    <p className="text-[13px] text-gray-500">
                        آیتم پیشنهادی
                    </p>
                    <h2 className="text-lg font-bold flex items-center text-black gap-1">
                        پیتزا مارگاریتا
                    </h2>
                    <p className="text-sm text-gray-600">سس مارینارا، پنیر، ریحان تازه</p>
                    <p className="font-bold text-lg text-gray-800">۳۳۵,۰۰۰ تومان</p>
                </div>
            </div>
        </div>
    )
}