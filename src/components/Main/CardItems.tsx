import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function CardItems({
    picture,
    title,
    description,
    price,
}: {
    picture: string;
    title: string;
    description: string;
    price: string;
}) {
    return (
        <>
            <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-0 flex items-center gap-x-6 justify-between">
                    <div className={"max-w-[150px] sm:max-w-[600px] max-h-[180px] sm:max-h-[200px]"}>
                        <Image
                            loading={"lazy"}
                            className="rounded-lg"
                            style={{ width: "100%", height: 150 }}
                            src={picture}
                            alt="picture"
                        />
                    </div>
                    <div className="flex-grow px-2">
                        <h4 className="text-sm sm:text-xl font-bold lg:font-semibold tracking-tight pt-2">{title}</h4>
                        <p className="text-sm leading-6 mt-2">{description}</p>
                        <h3 className="text-sm sm:text-2xl font-semibold text-left mt-2 pb-2">{price}</h3>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
